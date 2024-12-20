$(document).ready(function () {
   
    $('#carousel-imagens').slick({
        autoplay: true,
    });


    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(XXX) XXXXX-XXXX'
    })


    $('#cpf').mask('000.000.000-00', {
        placeholder: 'XXX.XXX.XXX-XX'
    })


    $('#cep').mask('00000-000', {
        placeholder: 'XXXXXX-XXX'
    })

  
    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
                minlength: 15
            },
            cep: { 
                required: true,
                minlength: 9
            },
            mensagem: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome",
                minlength: "O nome deve ter pelo menos 3 caracteres"
            },
            email: {
                required: "Por favor, insira seu e-mail",
                email: "Por favor, insira um e-mail válido"
            },
            telefone: {
                required: "Por favor, insira seu telefone"
            },
            veiculoDeInteresse: {
                required: "Por favor, insira o veículo de interesse"
            },
            mensagem: {
                required: "Por favor, insira uma mensagem",
                minlength: "A mensagem deve ter pelo menos 10 caracteres"
            }
        },
        submitHandler: function(form) {
            alert('Formulário enviado com sucesso!');
            form.submit();
        },
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    
    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html, body').animate({ 
            scrollTop: destino.offset().top
        }, 1000);
    });
});
