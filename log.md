02.08.2019
Opened MBP at work after not having used it the last 1 or 2 days. macOS somehow shut down or failed recovering from hibernate and instead reopened apps.
Tab Outliner listed several 'Window (crashed Fri Aug 02 2019)', however when opening them:
- closed state is not restored, so it just opened all the tabs (most of the tabs in my 'main' window were 'closed' in Tab Outliner)
- scroll position is not restored, whereas it is if I let Chrome restore tabs
Both deal breakers.


13.03.2019
Idea came back to mind after having used the extension 'Tab Outliner' for a bit and MBP/Chrome getting slow again with 251 tabs in 8 windows.
Would be nice to not only have navigation events (for time tracking (abandon repo `tabtime`)) but complete history of the state (DAG for each window like in 'Tab Outliner'). Ideally across different devices (merge this into `tabman` or make some new repo, for now working here (`tablog`) since last commit newer (started a year ago already)).
Want/interesting:
- some statistics over time about open tabs
- having a complete structured history besides the Chrome history
- better search/filter/management of tabs
  - search text in all open tabs
  - find duplicates (with time when loaded for pages with state, maybe even compare content, but would probably rarely be equal) across tabs and devices
  - close tabs on other devices
  - find 
