paypal
  .Buttons({
    style: {
      shape: "pill",
      color: "silver",
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
              value: "12.99",
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value: "12.99",
                },
              },
            },
            items: [
              {
                name: "High Tear Package",
                description: "High Tear Package",
                unit_amount: {
                  currency_code: "USD",
                  value: "12.99",
                },
                quantity: "1",
              },
            ],
          },
        ],
      })
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (orderData) {
        console.log()
        window.location = "/signup"
      })
    },
  })
  .render("#paypal-button")
