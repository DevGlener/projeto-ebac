import { ListCards } from './style';
import Footer from '../../components/ui/Footer';
import Header from '../../components/ui/Header';
import Card from '../../components/elements/Card';
import sushi from '../../assets/images/sushi.png';
import estrela from '../../assets/images/estrela.svg';
import Button from '../../components/elements/Button';

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <ListCards>
          <li>
            <Card
              image={sushi}
              title={'Hioki Sushi'}
              icon={estrela}
              nota={4.9}
              infos={['Destaque do dia', 'japonesa']}
              description={
                'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
              }
            >
              <Button type="link" to="/perfil">
                Saiba mais
              </Button>
            </Card>
          </li>
          <li>
            <Card
              image={sushi}
              title={'Hioki Sushi'}
              nota={4.9}
              icon={estrela}
              infos={['japonesa']}
              description={
                'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
              }
            >
              <Button type="link" to="/perfil">
                Saiba mais
              </Button>
            </Card>
          </li>
          <li>
            <Card
              image={sushi}
              title={'Hioki Sushi'}
              nota={4.9}
              icon={estrela}
              infos={['japonesa']}
              description={
                'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
              }
            >
              <Button type="link" to="/perfil">
                Saiba mais
              </Button>
            </Card>
          </li>
          <li>
            <Card
              image={sushi}
              title={'Hioki Sushi'}
              nota={4.9}
              icon={estrela}
              infos={['japonesa']}
              description={
                'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
              }
            >
              <Button type="link" to="/perfil">
                Saiba mais
              </Button>
            </Card>
          </li>
          <li>
            <Card
              image={sushi}
              title={'Hioki Sushi'}
              nota={4.9}
              icon={estrela}
              infos={['japonesa']}
              description={
                'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
              }
            >
              <Button type="link" to="/perfil">
                Saiba mais
              </Button>
            </Card>
          </li>
          <li>
            <Card
              image={sushi}
              title={'Hioki Sushi'}
              nota={4.9}
              icon={estrela}
              infos={['japonesa']}
              description={
                'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
              }
            >
              <Button type="link" to="/perfil">
                Saiba mais
              </Button>
            </Card>
          </li>
        </ListCards>
      </div>
      <Footer />
    </>
  );
}
export default Home;
