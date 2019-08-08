import Vue from 'vue'
// 第三方组件
// 搜索
import {
    //头部搜索框
    Search,
    //底部导航
    Tabbar,
    TabbarItem,
    //图标引入
    Icon,
    //导航栏
    NavBar,
    //输入框
    Field,
    // 按钮
    Button,
    // 单元格
    Cell,
    CellGroup,
    //Tab
    Tab,
    Tabs,
    //轮播图
    Swipe,
    SwipeItem,
    // image
    Image,
    // 宫格
    Grid,
    GridItem,
    //商品导航
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    //Checkbox 复选框
    Checkbox,
    CheckboxGroup,
    // 提交订单栏
    SubmitBar,
    List, //列表
    Popup, //弹出层
    //商品卡片
    Card,
} from 'vant';

export default () => {
    Vue.use(Tabbar);
    Vue.use(TabbarItem);
    Vue.use(Search);
    Vue.use(Icon);
    //导航栏
    Vue.use(NavBar);
    // 输入框
    Vue.use(Field);
    // 按钮
    Vue.use(Button);
    // 单元格
    Vue.use(Cell).use(CellGroup);
    // tab
    Vue.use(Tab).use(Tabs);
    // 轮播图
    Vue.use(Swipe).use(SwipeItem);
    // Image 
    Vue.use(Image);
    // 宫格
    Vue.use(Grid).use(GridItem);
    //商品导航
    Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);
    //商品卡片
    Vue.use(Card);
    //Checkbox 复选框
    Vue.use(Checkbox).use(CheckboxGroup);
    // 提交订单栏
    Vue.use(SubmitBar);
    // 弹出层
    Vue.use(Popup);
    // 列表
    Vue.use(List);
}