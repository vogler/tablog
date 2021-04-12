// import 'chrome-extension-async'

const log = x => console.log(x); // chrome console can 'show timestamps'
// const savePage = async tabId => new Promise(r => chrome.pageCapture.saveAsMHTML({tabId}, r));

// extensions
// chrome.management.getAll(function callback)

// idle
// chrome.idle.queryState(integer detectionIntervalInSeconds, function callback)
// chrome.idle.setDetectionInterval(integer intervalInSeconds)

// windows
// chrome.windows.getAll(object getInfo, function callback)

const events = {
  'runtime': ['onStartup'],
  'management': ['onInstalled', 'onUninstalled', 'onEnabled', 'onDisabled'],
  'idle': ['onStateChanged'],
  'history': ['onVisited', 'onVisitRemoved'],
  'windows': ['onCreated', 'onRemoved', 'onFocusChanged'],
  'tabs': ['onCreated', {name: 'onUpdated', filter: (id, o) => o.status == 'complete'}, 'onMoved', 'onActivated', 'onDetached', 'onAttached', 'onRemoved', {name: 'onZoomChange', filter: o => o.newZoomFactor != o.oldZoomFactor}]
}
for(const group in events){
  for(const listener of events[group]){
    console.log('addListener', group, listener);
    chrome[group][listener.name || listener].addListener((...args) => {
      if(!listener.filter || listener.filter(...args)) {
        console.log('event', group, listener, ...args);
      }
    });
  }
}
// const windows = chrome.windows.getAll({populate: true}, console.log);
