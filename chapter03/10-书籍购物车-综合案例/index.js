Vue.createApp({
    template: "#my-app",

    data() {
        return {
            books: [
                {
                    id: 1,
                    name: "《算法导论》",
                    date: '2006-9',
                    price: 85.00,
                    count: 1
                },
                {
                    id: 2,
                    name: "《PHP工程》",
                    date: '2009-8',
                    price: 45.00,
                    count: 1
                },
                {
                    id: 3,
                    name: "《算法导论2》",
                    date: '2012-9',
                    price: 125.00,
                    count: 1
                },
                {
                    id: 4,
                    name: "《算法导论3》",
                    date: '2016-9',
                    price: 185.00,
                    count: 1
                }
            ],

        }
    },

    methods: {
        dec(index) {
            // if (this.books[index].count > 1) {
            //     this.books[index].count--;
            // } else {
            //     alert("书的数量不能少于1")
            // }

            // 也可以在button中设置disabled属性为true
            this.books[index].count--;

        },
        inc(index) {
            this.books[index].count++;
        },
        removeBook(index) {
            // splice(index, len, [item])
            // index：数组开始下标
            // len：替换/删除的长度
            // item：替换的值，为删除时item为空
            this.books.splice(index, 1)
        }
    },

    computed: {
        totalPrice() {
            let totalPrice = 0;
            for (let book of this.books) {
                totalPrice += book.count * book.price;
            }
            return totalPrice;
        },

        // 这里的formatPrice计算属性不返回数字或者字符串，而是返回一个箭头函数。
        // 在模板中使用计算属性时，需要调用返回的箭头函数，并将需要计算的参数传递给该函数中的price参数
        formatPrice(price) {
            return (price) => {
                return "￥" + price;
            }

            // 等同于上面
            // return function (price) {
            //     return "￥" + price;
            // }
        },
    }
}).mount("#app");
