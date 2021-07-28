System.register("calc", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function add(a, b) {
        return a + b;
    }
    exports_1("add", add);
    function sub(a, b) {
        return a - b;
    }
    exports_1("sub", sub);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("index", ["calc"], function (exports_2, context_2) {
    "use strict";
    var calc;
    var __moduleName = context_2 && context_2.id;
    function setOperatorSub(element) {
        $(element).text("-").attr("class", "sub bloodButton");
    }
    exports_2("setOperatorSub", setOperatorSub);
    function setOperatorSum(element) {
        $(element).text("+").attr("class", "sum draculaButton");
    }
    exports_2("setOperatorSum", setOperatorSum);
    function calcSum() {
        return calc.add(Number($("#firstNumber").val()), Number($("#secondNumber").val()));
    }
    exports_2("calcSum", calcSum);
    function calcSub() {
        return calc.sub(Number($("#firstNumber").val()), Number($("#secondNumber").val()));
    }
    exports_2("calcSub", calcSub);
    function listenCalc() {
        $("#calc").on("click", function () {
            if ($("#operator").hasClass("sum"))
                $("#result").text(calcSum());
            else
                $("#result").text(calcSub());
        });
    }
    exports_2("listenCalc", listenCalc);
    function listenOperator() {
        $("#operator").on("click", function () {
            if ($(this).hasClass("sum"))
                setOperatorSub(this);
            else
                setOperatorSum(this);
        });
    }
    exports_2("listenOperator", listenOperator);
    return {
        setters: [
            function (calc_1) {
                calc = calc_1;
            }
        ],
        execute: function () {
            $(document).ready(function () {
                listenCalc();
                listenOperator();
            });
        }
    };
});
