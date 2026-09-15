import Card from '../../components/elements/Card';
import Footer from '../../components/ui/Footer';
import Header from '../../components/ui/Header';
import { ProfileContainer, ListCards } from './style';

function Profile() {
  return (
    <>
      <Header />
      <ProfileContainer>
        <div className="container">
          <ListCards>
            <li>
              <Card image="" title="" description="">
                ghgh
              </Card>
            </li>
          </ListCards>
        </div>
      </ProfileContainer>
      <Footer />
    </>
  );
}
export default Profile;
