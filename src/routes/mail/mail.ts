import { Router } from "express";
import nodemailer from 'nodemailer';


const mailRoutes = Router();

 mailRoutes.post("/newClient", async (req, res) =>  {
  const {email, name, address} = req.body;

 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
      service:'smtp.umbler.com',
      port:587,
      secure:false,
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2"
  },
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: "contato@suachaveauto.com.br", // list of receivers
    subject: "Nova conta criada ✔", 
    text: "Nova conta criada ✔", 
    html: `<p style="text-decoration: none;">Sucesso!! <br/>
    Temos um novo cliente na plataforma.
    Entre em contato para fornecer ajuda ou suporte inicial<br /><br />
    Cliente: ${name}<br/>
    E-mail: ${email}<br/>
    Endereço: ${address}<br/><br/>
    
    “Em tudo que fizerem, trabalhem de bom ânimo, como se fosse para o Senhor, e não para os homens”<br/>
    (Cl 3.23)<br/><br/>

    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } 
});
 mailRoutes.post("/create", async (req, res) =>  {
  const {email, name} = req.body;

 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
      service:'smtp.umbler.com',
      port:587,
      secure:false,
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2"
  },
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Sua conta foi criada ✔", 
    text: "Sua conta foi criada ✔", 
    html: `<p style="text-decoration: none;">Parabens ${name}! <br/>
    Seja muito bem-vindo a Sua Chave Auto.
    Somos uma start-up criada para agências e consultores, com foco em conectar seus autos a novos clientes. <br /><br />
    
    Acesse sua área administrativa clicando no link abaixo:<br/>
    <a href="https://adm.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
  
    <br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachaveauto.com.br <br/>
    --
    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } 
});

 mailRoutes.post("/updateAccount", async (req, res) =>  {
  const {email, name} = req.body;

 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
    port: 587,
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2"
  },
    secure: false,
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Sua conta foi atualizada ✔", 
    text: "Sua conta foi atualizada ✔", 
    html: `<p style="text-decoration: none;">Olá, ${name}. <br/>
    Sua conta foi atualizada com sucesso!<br/>
   
    Acesse sua área administrativa clicando no link abaixo:<br/>
    <a href="https://adm.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
  
    <br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachaveauto.com.br <br/>
    --
    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } 
});

mailRoutes.post("/createClient", async (req, res) =>  {
  const {email, name} = req.body;

 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Sua conta foi criada ✔", 
    text: "Sua conta foi criada ✔", 
    html: `<p style="text-decoration: none;">Parabens ${name}! <br/>
    Seja muito bem-vindo a Sua Chave Auto.
    Encontreos os melhores imóveis com o perfil que você deseja. <br /><br />
    
    Acesse sua área de cliente acessando o link abaixo:<br/>
    <a href="https://suachave.com.br/entrar" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
  
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachaveauto.com.br <br/>
    --
    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } 
});

mailRoutes.post("/newContract", async (req, res) =>  {
  const {email, name, company, status, website, title, idAuto} = req.body;
  
  const port = 587


 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });


  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: `Processo de ${status} iniciado`, 
    text: `Processo de ${status} iniciado`, 
    html: `<p>Olá ${name}, <br/>
    A agência ${company}, iniciou o processo de ${status} do auto: ${title}.<br/>
    Clique no link abaixo para enviar os documentos necessários para dar seguimento ao processo.:<br/>
    <a href="https://adm.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Enviar documentos</a> <br/><br/>
    Cllique no link abaixo e veja o auto desejado:<br/>
    <a href="${website}/${idAuto}" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Ver auto</a> <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachaveauto.com.br <br/>
    --
    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/documents", async (req, res) =>  {
  const {email, name} = req.body;

 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });


  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Você recebeu novos documentos", 
    text: "Você recebeu novos documentos", 
    html: `<p>Olá, temos novidades<br/>
    O Cliente: ${name}
    Enviou os documentos solicitados.<br/><br/>
    Veja em sua área administrativa. Clique a baixo:<br/>
    <a href="https://adm.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachaveauto.com.br <br/>
    --
    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/voucher", async (req, res) =>  {
  const {email} = req.body;
  
 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });


  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Estamos analisando 🕗", 
    text: "Estamos analisando 🕗", 
    html: `<p>Recebemos o seu pedido de pagamento e seu comprovante<br/>
    Em até 48h você receberá um e-mail de confirmação, informando estar tudo ok com o comprovante enviado.<br/><br/>
    Não se preocupe, seu acesso ja está liberado. <br/>
    <a href="https://adm.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachaveauto.com.br <br/>
    --
    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/paymentaproved", async (req, res) =>  {
  const {email} = req.body;

 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });


  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Pagamento confirmado 👏", 
    text: "Pagamento confirmado 👏", 
    html: `<p>Tudo certo, identificamos seu pagamento<br/>
    Continue a usar nossa plataforma aproveitando nossos serviços.<br/>
    <a href="https://adm.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachaveauto.com.br <br/>
    --
    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/newmessage", async (req, res) =>  {
  const {email, link} = req.body;
  
  const port = 587


 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
    port: 587,
        tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2"
  },
    secure: false,
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });


  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Você tem uma nova mensagem 📨", 
    text: "Você tem uma nova mensagem 📨", 
    html: `<p>Você recebeu uma nova mensagem.
    <br/><br/>
    <a href="${link}" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Clique aqui para abrir a mensagem</a>
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachaveauto.com.br <br/>
    --
    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/alert", async (req, res) =>  {
  const {email, idAuto} = req.body;

 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });


  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Alerta correspondente 😉", 
    text: "Alerta correspondente 😉", 
    html: `<p>Um novo auto foi adicionado e corresponde com seu alerta.<br/>
    Clique no link abaixo e veja:.
    <br/><br/>
    <a href="https://www.suachaveauto.com.br/auto/${idAuto}" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Ver auto</a>
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachaveauto.com.br <br/>
    --
    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/paymentreproved", async (req, res) =>  {
  const {email} = req.body;

 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });


  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Temos um problema 😢", 
    text: "Ops. Temos um problema 😢", 
    html: `<p>Não identificamos o seu pagamento.<br/>
    O comprovante enviado não é válido ou não bate com nossa base de pagamentos.
    <br/><br/>
    <b>Não envie tela de confirmação.<br/>
    Não envie comprovante resumido.<br/>
    Não envie linha de extrato.<br/>
    Não rasure ou corte o comprovante.<br/>
    O envio de comprovante fora dos padrões impossibilita análise do mesmo.</b> <br/><br/>
    Você pode enviar um novo comprovante respondendo este e-mail ou em nosso whatsapp.<br/>
    <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachaveauto.com.br <br/>
    --
    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email enviado com sucesso")
}

});

mailRoutes.post("/passwordcode", async (req, res) =>  {
  const mail = req.body;
  const code = req.body;
  console.log(mail.mail)
  console.log(code.code)


 let transporter = nodemailer.createTransport({
    name: 'contato@suachaveauto.com.br',
    host: "smtp.umbler.com",
  port: 587,
  secure: false,
  auth: {
    user: "contato@suachaveauto.com.br",
    pass: "211902fluminensE@"
  }
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: mail.mail, // list of receivers
    subject: "Recupere seu acesso 🗝️", 
    text: "Recupere seu acesso 🗝️", 
    html: `<p>Você solicitou código de recuperação de senha?<br/>
    Aqui está. Utilize-o para redefinir seu acesso:<p/> 
    <p>Seu código:</p>
    <h3>${code.code}</h3>
    <p>Acesse o link para alterar sua senha: <a href="https://suachave.com.br/recuperar-codigo/${mail.mail}" target="_blank">Recuperar minha senha</a> <br/><br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@suachaveauto.com.br <br/><br/>
    
    suachave <a href="https://www.suachaveauto.com.br" target="_blank">www.suachaveauto.com.br</a></p>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email com código de recuperação enviado com sucesso")
}

});

mailRoutes.post("/newpassword", async (req, res) =>  {
  const mail = req.body;
  console.log(mail.mail)


 let transporter = nodemailer.createTransport({
    name: 'contato@suachaveauto.com.br',
    host: "smtp.umbler.com",
  port: 587,
  secure: false,
  auth: {
    user: "contato@suachaveauto.com.br",
    pass: "211902fluminensE@"
  }
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: mail.mail, // list of receivers
    subject: "Senha alterada 🔒", 
    text: "Senha alterada 🔒", 
    html: `<p>Sua senha foi alterada com sucesso.<br/>
    Faça login com seu e-mail e nova senha:<p/> 

    <p>Caso não tenha solicitado alteração de senha:</p><br/>
    <p>Entre em contato com nossa equipe!</p>
   
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (22)99791-0510<br/>
    contato@suachaveauto.com.br <br/><br/>
    
    suachave <a href="https://www.suachaveauto.com.br" target="_blank">www.suachaveauto.com.br</a></p>`, // html body.
  });


  if(info) {
    res.status(200).json({"message":"Email enviado com sucesso"});
console.log("Email com código de recuperação enviado com sucesso")
}

});

mailRoutes.post("/shedulingAvaluation", async (req, res) =>  {
  const {email, nameClient, meet, location, day, month, year, shift, hour} = req.body;

 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
    port: 587,
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2"
  },
    secure: false,
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Avaliação agendada 📅", 
    text: "Avaliação agendada 📅", 
    html: `<p style="text-decoration: none;">Olá, ${nameClient}! <br/>
    A avaliação de seu auto foi agendada.
    Sua avaliação será na data ${day}/${month}/${year} - Turno: ${shift}, Horário: ${hour}. <br />
    Local de encontro: ${meet}, Endereço: ${location}. <br /><br />
    
    En caso de dúvidas entre em contato com a agência.
  
    <br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachaveauto.com.br <br/>
    --
    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } 
});

mailRoutes.post("/newPayment", async (req, res) =>  {
  const {nameClient, value, plain} = req.body;

  const email = "gruposuachave@gmail.com"

 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
    port: 587,
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2"
  },
    secure: false,
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Novo Bolix Gerado 💳", 
    text: "Novo Bolix Gerado 💳", 
    html: `<p style="text-decoration: none;">Novo Bolix Gerado! <br/>
    O cliente ${nameClient}, gerou um novo bolix.<br/><br/>
    Plano: ${plain} - Valor: ${value}<br/><br/>

    Você comerá do fruto do seu trabalho, e será feliz e próspero.<br/>
    Salmos 128:2<br/><br/>

    Entre em contato com a agência para verificar a necessidade de suporte.<br/><br/>

    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } 
});
mailRoutes.post("/newPlainCreated", async (req, res) =>  {
  const {nameClient, value, plain} = req.body;

  const email = "gruposuachave@gmail.com"

 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
    port: 587,
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2"
  },
    secure: false,
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Novo Bolix Gerado 💳", 
    text: "Novo Bolix Gerado 💳", 
    html: `<p style="text-decoration: none;">Novo Bolix Gerado! <br/>
    O cliente ${nameClient}, gerou um novo bolix.<br/><br/>
    Plano: ${plain} - Valor: ${value}<br/><br/>

    Você comerá do fruto do seu trabalho, e será feliz e próspero.<br/>
    Salmos 128:2<br/><br/>

    Entre em contato com a agência para verificar a necessidade de suporte.<br/><br/>

    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } 
});

mailRoutes.post("/leads", async (req, res) =>  {
  const {email} = req.body;

 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
    port: 587,
    
    tls: {
      rejectUnauthorized: false,
      minVersion: "TLSv1.2"
  },
    secure: false,
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto - Carros e Motos" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Novo lead recebido 🚀", 
    text: "Novo lead recebido 🚀", 
    html: `<p style="text-decoration: none;">
    Você recebeu um novo lead! <br/>
    Um cliente deseja entrar em contato via ligação ou whatsapp. <br /><br />
    
    Acesse sua área administrativa e veja clicando no link abaixo:<br/>
    <a href="https://adm.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
  
    <br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachaveauto.com.br <br/>
    --
    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });


  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } 
});


mailRoutes.post("/scheduling", async (req, res) =>  {
  const {email} = req.body;

 let transporter = nodemailer.createTransport({
      name: 'contato@suachaveauto.com.br',
      host: "smtp.umbler.com",
    port: 587,
    
    tls: {
      rejectUnauthorized: false,
      minVersion: "TLSv1.2"
  },
    secure: false,
    auth: {
      user: "contato@suachaveauto.com.br",
      pass: "211902fluminensE@"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Novo Agendamento recebido 📅", 
    text: "Novo Agendamento recebido 📅", 
    html: `<p style="text-decoration: none;">
    Você recebeu um novo agendamento! <br/><br />
    
    Acesse sua área administrativa e veja clicando no link abaixo:<br/>
    <a href="https://adm.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
  
    <br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachaveauto.com.br <br/>
    --
    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } 
});


mailRoutes.post("/alertPayment", async (req, res) =>  {
  const {email, name} = req.body;

  let transporter = nodemailer.createTransport({
    name: 'contato@suachaveauto.com.br',
    host: "smtp.umbler.com",
  port: 587,
  
  tls: {
    rejectUnauthorized: false,
    minVersion: "TLSv1.2"
},
  secure: false,
  auth: {
    user: "contato@suachaveauto.com.br",
    pass: "211902fluminensE@"
  }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sua Chave Auto" <contato@suachaveauto.com.br>', 
    to: email, // list of receivers
    subject: "Lembrete de pagamento 📅", 
    text: "Lembrete de pagamento 📅", 
    html: `<p style="text-decoration: none;">
    Olá, ${name} <br/>
    Seu plano encontra-se em aberto desde o dia 10/08/2023.<br/><br/>
    Evite a suspensão dos serviços. Para efetuar o pagamento é bem fácil. <br/>
    No menu lateral esquerdo, vá na opção Conta, em seguida clique em Meu Plano, Clique em novo pagamento e por fim, gerar Bolix.<br/>
    Viu como é fácil!?
    <br /><br/>
    
    Acesse sua área administrativa e veja clicando no link abaixo:<br/>
    <a href="https://adm.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">Acessar área administrativa</a> <br/>
  
    <br/>
    Em caso de dúvida, fale conosco. <br/>
    Whatsapp: (21) 99742-9585<br/>
    E-mail: contato@suachaveauto.com.br <br/>
    --
    <br/>
    <a href="https://www.suachaveauto.com.br" target="_blank" style="text-decoration: none; color: black; font-weight: bold;">www.suachaveauto.com.br</a><p/>`, // html body.
  });



  if(info) {
        res.status(200).json({"message":"Email enviado com sucesso"});
    console.log("Email enviado com sucesso")
  } 
});



export { mailRoutes };


