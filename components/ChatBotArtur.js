import React from 'react';

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const ChatBotArtur = () => {

  const theme = {
    headerBgColor: '#6b09ac',
    fontFamily: 'Helvetica',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#e5e3e6',
    botFontColor: '#030303',
    userBubbleColor: '#6b09ac',
    userFontColor: '#fff',
  };

  const steps = [
    {
      id: '1',
      message: 'Oi, eu sou o A.R.T.U.R. Qual sua dúvida?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Documentação', trigger: '3' },
        { value: 2, label: 'Financeiro', trigger: '9'},
        { value: 3, label: 'Cursos', trigger: '8'},
      ]
    },
    {
      id: '3',
      options: [
        { value: 1, label: 'Comprovante de matrícula', trigger: '4'},
        { value: 2, label: '2ª Via de Certificado de matrícula', trigger: '7'}
      ]
    },
    {
      id:'4',
      message: 'Digite sua matrícula',
      trigger: '5'
    },
    {
      id: '5',
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return 'Matrícula invalida';
        }
        return true;
      },
      trigger: '6'
    },
    {
      id:6,
      component:  (
        <div style={{ width: '100%' }}>
        <h3>Comprovante</h3>
        <table>
          <tbody>
            <tr>
              <td>Aluno: </td>
              <td>Aluno01</td>
            </tr>
            <tr>
              <td>Turno: </td>
              <td>Nortuno</td>
            </tr>
            <tr>
              <td>Curso: </td>
              <td>Análise e Desenvolvimento de Sistemas</td>
            </tr>
          </tbody>
        </table>
      </div>
      ),
      end: true
    },
    {
      id:7,
      component:  (
        <div style={{ width: '100%' }}>
        <h3>Certificado de Matrícula</h3>
        <table>
          <tbody>
            <tr>
              <td>Aluno: </td>
              <td>Aluno01</td>
            </tr>
            <tr>
              <td>Turno: </td>
              <td>Nortuno</td>
            </tr>
            <tr>
              <td>Curso: </td>
              <td>Análise e Desenvolvimento de Sistemas</td>
            </tr>
          </tbody>
        </table>
      </div>
      ),
      end: true
    },
    {
      id:8,
      message: 'A faculdade Senac possui os seguintes cursos de graduação: Bacharelado em administração, Design de moda, Gastronomia, Gestão de RH, Estética e cosmética, Análise e desenvolv. de sistemas, Gestão comercial e Design de interiores.',
      end: true
    },
    {
      id:9,
      message:'Digite o mês do boleto desejado',
      trigger: '10'
    },
    {
      id:10,
      user:true,
      validator: (value) => {
        if (value != 'julho') {
          return 'Boleto indisponivel';
        }
        return true;
      },
      trigger: '11'
    },
    {
      id: 11,
      component: (
        <a href='https://repositorio.setcorp.com.br/imagens/setpar/exemplo-boleto.png'>Imprimir Boleto</a>
      ),
      end: true
    }
  ]

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        floating={true}
        headerTitle='A.R.T.U.R'
        botAvatar='https://imgur.com/bu6CWfS.png'
        userAvatar='https://image.flaticon.com/icons/svg/145/145867.svg'
        steps={steps}
      />
    </ThemeProvider>

  );

}
export default ChatBotArtur;