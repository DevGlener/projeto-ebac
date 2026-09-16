import Footer from '../../components/ui/Footer';
import Header from '../../components/ui/Header';
import Pizza from '../../assets/images/esfira.png';

import { ProfileContainer, ListCards, ButonEdit, CardEdit } from './style';
import Banner from '../../components/elements/Banner';

function Profile() {
  return (
    <ProfileContainer>
      <Header name={'Restaurantes'} quantity={0} text={' Produto(s) no Carrinho'} />
      <Banner country={'italiana'} name={'La Dolce Vita Trattoria'} />
      <>
        <div className="container">
          <ListCards>
            <li>
              <CardEdit image={Pizza} title="Pizza Margarita">
                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão
                fresco e um toque de azeite. Sabor e simplicidade!
                <ButonEdit type="button" onClick={() => console.log('funcionando')}>
                  Adicionar ao carrinho
                </ButonEdit>
              </CardEdit>
            </li>
            <li>
              <CardEdit image={Pizza} title="Pizza Margarita">
                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão
                fresco e um toque de azeite. Sabor e simplicidade!
                <ButonEdit type="button" onClick={() => console.log('funcionando')}>
                  Adicionar ao carrinho
                </ButonEdit>
              </CardEdit>
            </li>
            <li>
              <CardEdit image={Pizza} title="Pizza Margarita">
                A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão
                fresco e um toque de azeite. Sabor e simplicidade!
                <ButonEdit type="button" onClick={() => console.log('funcionando')}>
                  Adicionar ao carrinho
                </ButonEdit>
              </CardEdit>
            </li>
          </ListCards>
        </div>
      </>
      <Footer />
    </ProfileContainer>
  );
}
export default Profile;
