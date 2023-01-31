# Charlar - Charlar Chat Application.

## Table of contents

- [Overview](#overview)
  - [Screenshot]
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
### _Charlar is a web application used to send and receive messages. 


### Screenshot
![46A58488-03DF-4F6A-AD2A-23A5607AD8BF_1_201_a](https://user-images.githubusercontent.com/93778975/215789761-b2d563b8-8c14-4c48-8936-d70f9f040cfa.jpeg)
![1CFC52A0-5E43-4E7C-A23D-312D3BD90083_1_201_a](https://user-images.githubusercontent.com/93778975/215789778-966a01b5-e676-4d86-add6-eba3c1a80789.jpeg)
![D9260E79-2699-4289-B1FB-B42529BD6367_1_201_a](https://user-images.githubusercontent.com/93778975/215789789-78233b8a-f751-45f8-b91e-8113f5fda80b.jpeg)
![A56AE049-D2E5-48CC-AC2C-96FAAC6E6DB2_1_201_a](https://user-images.githubusercontent.com/93778975/215789809-25c7265a-186b-4620-bb3b-710f80277c81.jpeg)
![9673D846-F050-4807-A93C-3720C75968E3_1_201_a](https://user-images.githubusercontent.com/93778975/215789818-bb20a8ce-95a4-4dff-ac5f-7945de27cf4e.jpeg)
![7C42A10B-C3EE-44BA-839D-AAF43FC56700_1_201_a](https://user-images.githubusercontent.com/93778975/215789823-89a607e4-1d8a-456e-b82c-cffaa7ef8052.jpeg)

## My process

### Built with

- SCSS custom properties
- Flexbox
- SCSS Grid
- Mobile-first workflow
- [React js](https://beta.reactjs.org/) - JS library
- [Sass](https://sass-lang.com) - CSS Preprocessor 
- [Socket.io](https://socket.io/).


### Some Nice Stuffs

```JS
    io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  socket.join(userId);

  socket.on("send-message", ({ receivers, text }) => {
    receivers.forEach((receiver) => {
      const newReceivers = receivers.filter((r) => r !== receiver);
      newReceivers.push(userId);
      socket.broadcast.to(receiver).emit("receive-message", {
        receivers: newReceivers,
        sender: userId,
        text,
      });
    });
  });
});
```
```scss
    .dashboard-Container {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 27% 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "sidebar chats";
}
```
```JSX
       <section className="c-Container">
        {contacts
          .sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          .filter((c) => {
            return searchText === "" ? c : c.name.includes(searchText);
          })
          .map((contact) => (
            <span className="user-Contact-Container" key={contact.id}>
              <p>{contact.name}</p>
            </span>
          ))}
      </section>
```



### Continued development

- Css Grid
- Sass functions
- React js
- Sass
- Node js
- Express js
- Socket.io

### Useful resources

- [Socket.io]: This helped me while working with Backend. I'll Like to work with it in upcoming projects.

## Author
- Github - [@Wizzy-05](https://github.com/Wizzy-05)
- Twitter - [@ahuzi_wisdom](https://twitter.com/ahuzi_wisdom)


## Acknowledgments
- [@WebDev Simplified] Thank you so much



