paypal
  .Buttons({
    style: {
      shape: "pill",
      color: "blue",
      layout: "vertical",
      label: "paypal",
    },
    onError: function (err) {
      console.log(err)
    },
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "1200",
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value: "1200",
                },
              },
            },
            items: [
              {
                name: "Laptop",
                description: "Hp Laptop",
                unit_amount: {
                  currency_code: "USD",
                  value: "1200",
                },
                quantity: "1",
              },
            ],
          },
        ],
      })
    },
    onApprove: function (actions) {
      return actions.order.capture().then(function (orderData) {
        console.log("Capture result", orderData, JSON.stringify(orderData, null, 2))
        var transaction = orderData.purchase_units[0].payments.captures[0]
        alert("Transaction " + transaction.status + ":" + transaction.id + "\n\nSee console for all available details")
      })
    },
  })
  .render("#paypal-button")
