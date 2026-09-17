import Footer from '../../components/ui/Footer';

import Pizza from '../../assets/images/esfira.png';

import { ProfileContainer, CardEdit, ButtonEdit } from './style';

import Banner from '../../components/elements/Banner';

import Header from '../../components/ui/Header';

function Profile() {
  return (
    <ProfileContainer>
      <div className="titles">
        <Header name={'Restaurantes'} quantity={0} text={' Produto(s) no Carrinho'} />
        <Banner country={'italiana'} name={'La Dolce Vita Trattoria'} />
      </div>
      <div className="container">
        <CardEdit title="Pizza Margarita" image={Pizza}>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e
          um toque de azeite. Sabor e simplicidade!
          <ButtonEdit type={'button'}>Adicionar ao carrinho</ButtonEdit>
        </CardEdit>
        <CardEdit title="Pizza Margarita" image={Pizza}>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e
          um toque de azeite. Sabor e simplicidade!
          <ButtonEdit type={'button'}>Adicionar ao carrinho</ButtonEdit>
        </CardEdit>
        <CardEdit title="Pizza Margarita" image={Pizza}>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e
          um toque de azeite. Sabor e simplicidade!
          <ButtonEdit type={'button'}>Adicionar ao carrinho</ButtonEdit>
        </CardEdit>
        <CardEdit title="Pizza Margarita" image={Pizza}>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e
          um toque de azeite. Sabor e simplicidade!
          <ButtonEdit type={'button'}>Adicionar ao carrinho</ButtonEdit>
        </CardEdit>
        <CardEdit title="Pizza Margarita" image={Pizza}>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e
          um toque de azeite. Sabor e simplicidade!
          <ButtonEdit type={'button'}>Adicionar ao carrinho</ButtonEdit>
        </CardEdit>
        <CardEdit title="Pizza Margarita" image={Pizza}>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e
          um toque de azeite. Sabor e simplicidade!
          <ButtonEdit type={'button'}>Adicionar ao carrinho</ButtonEdit>
        </CardEdit>
      </div>
      <Footer />
    </ProfileContainer>
  );
}
export default Profile;
