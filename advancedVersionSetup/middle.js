paypal
  .Buttons({
    style: {
      shape: "pill",
      color: "gold",
      layout: "vertical",
      label: "checkout",
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
              value: "5.99",
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value: "5.99",
                },
              },
            },
            items: [
              {
                name: "Low Tear Package",
                description: "Low Tear Package",
                unit_amount: {
                  currency_code: "USD",
                  value: "5.99",
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
