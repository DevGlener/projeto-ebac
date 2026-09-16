import { ListCards, ButtonEdit } from './style';
import Footer from '../../components/ui/Footer';
import Header from '../../components/ui/Header';
import Card from '../../components/elements/Card';
import sushi from '../../assets/images/sushi.png';
import estrela from '../../assets/images/estrela.svg';

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <ListCards>
          <li>
            <Card
              icon={estrela}
              infos={['Destaque do dia', 'japonesa']}
              nota={4.8}
              title={'Hioki Sushi'}
              image={sushi}
            >
              Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos,
              sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens
              cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso
              delivery!
              <ButtonEdit type={'link'} to={'/perfil'}>
                Saiba mais
              </ButtonEdit>
            </Card>
          </li>
          <li>
            <Card
              icon={estrela}
              infos={['japonesa']}
              nota={4.8}
              title={'Hioki Sushi'}
              image={sushi}
            >
              Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos,
              sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens
              cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso
              delivery!
              <ButtonEdit type={'link'} to={'/perfil'}>
                Saiba mais
              </ButtonEdit>
            </Card>
          </li>
          <li>
            <Card
              icon={estrela}
              infos={['japonesa']}
              nota={4.8}
              title={'Hioki Sushi'}
              image={sushi}
            >
              Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos,
              sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens
              cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso
              delivery!
              <ButtonEdit type={'link'} to={'/perfil'}>
                Saiba mais
              </ButtonEdit>
            </Card>
          </li>
          <li>
            <Card
              icon={estrela}
              infos={['japonesa']}
              nota={4.8}
              title={'Hioki Sushi'}
              image={sushi}
            >
              Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos,
              sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens
              cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso
              delivery!
              <ButtonEdit type={'link'} to={'/perfil'}>
                Saiba mais
              </ButtonEdit>
            </Card>
          </li>
          <li>
            <Card
              icon={estrela}
              infos={['japonesa']}
              nota={4.8}
              title={'Hioki Sushi'}
              image={sushi}
            >
              Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos,
              sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens
              cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso
              delivery!
              <ButtonEdit type={'link'} to={'/perfil'}>
                Saiba mais
              </ButtonEdit>
            </Card>
          </li>
          <li>
            <Card
              icon={estrela}
              infos={['japonesa']}
              nota={4.8}
              title={'Hioki Sushi'}
              image={sushi}
            >
              Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos,
              sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens
              cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso
              delivery!
              <ButtonEdit type={'link'} to={'/perfil'}>
                Saiba mais
              </ButtonEdit>
            </Card>
          </li>
        </ListCards>
      </div>
      <Footer />
    </>
  );
}
export default Home;
