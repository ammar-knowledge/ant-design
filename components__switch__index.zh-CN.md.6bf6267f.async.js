"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1564],{289042:function(u,l,n){n.r(l);var m=n(502143),p=n(968521),h=n(720719),g=n(28840),v=n(759907),i=n(828089),Z=n(825673),E=n(902068),x=n(574399),P=n(863942),b=n(316073),D=n(24628),C=n(719260),O=n(956140),c=n(127179),_=n(905388),f=n(40428),M=n(606965),k=n(268696),w=n(587302),r=n(424128),T=n(249706),A=n(795127),I=n(116846),L=n(212039),R=n(73024),B=n(553913),o=n(606641),d=n(667294),e=n(370917);function a(){var s=(0,o.eL)(),t=s.texts;return(0,e.tZ)(o.dY,null,(0,e.tZ)(d.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value),(0,e.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,t[1].value),(0,e.tZ)("li",null,t[2].value,(0,e.tZ)("code",null,t[3].value),t[4].value,(0,e.tZ)("code",null,t[5].value),t[6].value,(0,e.tZ)("code",null,t[7].value),t[8].value)),(0,e.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,e.tZ)(_.Z,{items:[{demo:{id:"components-switch-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/switch/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Switch } from 'antd';
const onChange = (checked) => {
  console.log(\`switch to \${checked}\`);
};
const App = () => <Switch defaultChecked onChange={onChange} />;
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-switch-demo-disabled"},previewerProps:{title:"\u4E0D\u53EF\u7528",filename:"components/switch/demo/disabled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Space, Switch } from 'antd';
const App = () => {
  const [disabled, setDisabled] = useState(true);
  const toggle = () => {
    setDisabled(!disabled);
  };
  return (
    <Space direction="vertical">
      <Switch disabled={disabled} defaultChecked />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </Space>
  );
};
export default App;
`,description:"<p>Switch \u5931\u6548\u72B6\u6001\u3002</p>"}},{demo:{id:"components-switch-demo-text"},previewerProps:{title:"\u6587\u5B57\u548C\u56FE\u6807",filename:"components/switch/demo/text.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';
const App = () => (
  <Space direction="vertical">
    <Switch checkedChildren="\u5F00\u542F" unCheckedChildren="\u5173\u95ED" defaultChecked />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </Space>
);
export default App;
`,description:"<p>\u5E26\u6709\u6587\u5B57\u548C\u56FE\u6807\u3002</p>"}},{demo:{id:"components-switch-demo-size"},previewerProps:{title:"\u4E24\u79CD\u5927\u5C0F",filename:"components/switch/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Switch } from 'antd';
const App = () => (
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </>
);
export default App;
`,description:'<p><code>size="small"</code> \u8868\u793A\u5C0F\u53F7\u5F00\u5173\u3002</p>'}},{demo:{id:"components-switch-demo-loading"},previewerProps:{title:"\u52A0\u8F7D\u4E2D",filename:"components/switch/demo/loading.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Switch } from 'antd';
const App = () => (
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>
);
export default App;
`,description:"<p>\u6807\u8BC6\u5F00\u5173\u64CD\u4F5C\u4ECD\u5728\u6267\u884C\u4E2D\u3002</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)(i.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[9].value),(0,e.tZ)("th",null,t[10].value),(0,e.tZ)("th",null,t[11].value),(0,e.tZ)("th",null,t[12].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[13].value),(0,e.tZ)("td",null,t[14].value),(0,e.tZ)("td",null,t[15].value),(0,e.tZ)("td",null,t[16].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[17].value),(0,e.tZ)("td",null,t[18].value),(0,e.tZ)("td",null,t[19].value),(0,e.tZ)("td",null,t[20].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[21].value),(0,e.tZ)("td",null,t[22].value),(0,e.tZ)("td",null,t[23].value),(0,e.tZ)("td",null,t[24].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[25].value),(0,e.tZ)("td",null,t[26].value),(0,e.tZ)("td",null,t[27].value),(0,e.tZ)("td",null,t[28].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[29].value),(0,e.tZ)("td",null,t[30].value),(0,e.tZ)("td",null,t[31].value),(0,e.tZ)("td",null,t[32].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[33].value),(0,e.tZ)("td",null,t[34].value),(0,e.tZ)("td",null,t[35].value),(0,e.tZ)("td",null,t[36].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[37].value),(0,e.tZ)("td",null,t[38].value),(0,e.tZ)("td",null,t[39].value),(0,e.tZ)("td",null,t[40].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[41].value),(0,e.tZ)("td",null,t[42].value,(0,e.tZ)("code",null,t[43].value),t[44].value,(0,e.tZ)("code",null,t[45].value)),(0,e.tZ)("td",null,t[46].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[47].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[48].value),(0,e.tZ)("td",null,t[49].value),(0,e.tZ)("td",null,t[50].value),(0,e.tZ)("td",null,t[51].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[52].value),(0,e.tZ)("td",null,t[53].value),(0,e.tZ)("td",null,t[54].value),(0,e.tZ)("td",null,t[55].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[56].value),(0,e.tZ)("td",null,t[57].value),(0,e.tZ)("td",null,t[58].value),(0,e.tZ)("td",null,t[59].value)))),(0,e.tZ)("h2",{id:"\u65B9\u6CD5"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u65B9\u6CD5",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u65B9\u6CD5"),(0,e.tZ)(i.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[60].value),(0,e.tZ)("th",null,t[61].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[62].value),(0,e.tZ)("td",null,t[63].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[64].value),(0,e.tZ)("td",null,t[65].value)))),(0,e.tZ)("h2",{id:"design-token"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,e.tZ)(c.Z,{component:"Switch"})))}l.default=a}}]);
