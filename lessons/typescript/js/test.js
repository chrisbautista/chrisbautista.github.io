/**
 * Created by chrisbautista on 2016-11-06.
 */
function countDown(first, last, interval) {
    if (last === void 0) { last = 0; }
    if (interval === void 0) { interval = 1; }
    var ctr = first;
    while (ctr < last) {
        console.log(ctr);
        ctr -= interval;
    }
}
countDown(10, 0, 1);
var todoTemplate = "Todo #" + todo.id;
var container = document.getElementById('container');
function counterFunc(el) {
    this.ctr = 0;
    el.innerHTML = this.ctr;
    el.addEventListener('click', function () {
        this.ctr++;
        el.innerHTML = this.ctr;
    });
}
function counterFuncLambda(el) {
    var _this = this;
    this.ctr = 0;
    el.innerHTML = this.ctr;
    el.addEventListener('click', function () {
        _this.ctr++;
        el.innerHTML = _this.ctr;
    });
}
counterFunc(container);
counterFuncLambda(container);
function dotdotdotOperator() {
    var tmp = [1, 2, 3];
    var tmp2 = tmp.concat([4, 5, 6]);
    console.log(tmp2);
}
dotdotdotOperator();
