const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const nameDelivery = order.order.delivery.deliveryPerson;
    const name = order.name;
    const telefone = order.phoneNumber;
    const rua = order.address.street;
    const num = order.address.number;
    const ap = order.address.apartment;
    console.log(`Olá ${nameDelivery}, entrega para: ${name}, Telefone: ${telefone}, R. ${rua}, Nº: ${num}, AP: ${ap}.`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva';
    const nome = order.name;
    const produto1 = Object.keys(order.order.pizza)[0];
    const produto2 = Object.keys(order.order.pizza)[1];
    const produto3 = order.order.drinks.coke.type;
    order.payment.total = 50,00
    const valor = order.payment.total;

    console.log(`Olá ${nome}, seu pedido de ${produto1}, ${produto2} e ${produto3} é de R$${valor},00.`);
  
  }
  
  orderModifier(order);

  /* Agora você vai fazer alguns exercícios de fixação.
Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701". OK
Note que o parâmetro da função já está sendo passado na chamada da função.
Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00. */