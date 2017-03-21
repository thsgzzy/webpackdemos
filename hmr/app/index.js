/**
 * Created by a1 on 17/3/19.
 */
import component from './component';
let demoComponent = component();
document.body.appendChild(demoComponent);

alert(1);
//HMR 接口
if (module.hot) {
    module.hot.accept('./component', () => {
        const nextComponent = component();
        document.body.replaceChild(nextComponent, demoComponent);
        demoComponent = nextComponent;
    })
}