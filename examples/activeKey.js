/* eslint-disable no-console,react/button-has-type */
import '../assets/index.less';
import React from 'react';
import Tabs, { TabPane } from '../src';
import TabContent from '../src/SwipeableTabContent';
import ScrollableInkTabBar from '../src/ScrollableInkTabBar';

const PanelContent = ({ id }) => (
  <div>
    {[1, 2, 3, 4].map(item => (
      <p key={item}>{id}</p>
    ))}
  </div>
);

class Demo extends React.Component {
  state = {
    activeKey: '',
    start: 0,
  };

  onChange = activeKey => {
    console.log(`onChange ${activeKey}`);
    this.setState({
      activeKey,
    });
  };

  onTabClick = key => {
    console.log(`onTabClick ${key}`);
    if (key === this.state.activeKey) {
      this.setState({
        activeKey: '',
      });
    }
  };

  tick = () => {
    this.setState({
      start: this.state.start + 10,
    });
  };

  handleNotExistKey = () => {
    this.setState({
      activeKey: '-1',
    });
  };

  render() {
    const { start } = this.state;
    return (
      <div style={{ margin: 20 }}>
        <h1>Simple Tabs</h1>
        <Tabs
          renderTabBar={() => <ScrollableInkTabBar onTabClick={this.onTabClick} />}
          renderTabContent={() => <TabContent animatedWithMargin />}
          activeKey={this.state.activeKey}
          onChange={this.onChange}
        >
          <TabPane tab={`tab ${start}`} key="1">
            <PanelContent id={start} />
          </TabPane>
          <TabPane tab={`tab ${start + 1}`} key="2">
            <PanelContent id={start + 1} />
          </TabPane>
          <TabPane tab={`tab ${start + 2}`} key="3">
            <PanelContent id={start + 2} />
          </TabPane>
          <TabPane tab={`tab ${start + 3}`} key="4" disabled>
            <PanelContent id={start + 3} />
          </TabPane>
        </Tabs>
        <button onClick={this.tick}>rerender</button>
        <button onClick={this.handleNotExistKey} style={{ marginLeft: 10 }}>
          change to a non-existent activeKey
        </button>
      </div>
    );
  }
}
export default Demo;
