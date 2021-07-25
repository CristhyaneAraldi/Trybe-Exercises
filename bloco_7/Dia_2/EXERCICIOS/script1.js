// Parte 1

// Exercício 1
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
    return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}.`;
  }
  
  console.log(customerInfo(order));
  
  // Exercício 2
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    // Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.
    const pizzas = Object.keys(order.order.pizza);
    order.newName = 'Luiz Silva';
    order.newTotal = '50';
  
    return `Olá ${order.newName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${(order.order.drinks.coke.type)} é R$ ${order.newTotal},00.`
  }
  
  console.log(orderModifier(order));
