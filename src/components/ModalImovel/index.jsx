import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// Carousel
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

// Icons & Buttons
import ApartmentIcon from '@material-ui/icons/Apartment';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotelIcon from '@material-ui/icons/Hotel';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';

// Api && Hooks
import { apiIntegracaoImvs } from '../../services/apiIntegracaoImoveis';
import { useUser } from '../core/UserProvider/useUser';

// Styles
import {
  HouseIcons, CarouselContainer, HouseImg, PapperContainer, Container, InfoP,
  HouseDetails, RightMenuContainer, ContainerUp, ContainerDown, MenuText, FavIcon,
} from './styles';

export const ModalImovel = ({ handleClose, open, imovel }) => {
  const { user: { id } } = useUser();

  const idRenamer = (imv) => {
    const { id: idImobile } = imv;
    const { id, ...imovelNovo } = imv;
    const idRenamed = { ...imovelNovo, idImobile };
    return idRenamed;
  };

  const likeButton = () => {
    apiIntegracaoImvs.user.addImovel(id, idRenamer(imovel))
      .then(() => console.log('imovel adicionado'));
  };

  return (
    <Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>

          <PapperContainer>

            <IconButton
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                color: 'rgb(38,97,151)',
                alignItems: 'right',
                flexDirection: 'row-reverse',
              }}
              type="button"
              onClick={() => handleClose()}
            >
              <CloseIcon />
            </IconButton>

            <ContainerUp>
              <CarouselContainer>
                <AwesomeSlider>
                  <div>
                    <HouseImg urlImagem={imovel.urlImagem} />
                  </div>
                </AwesomeSlider>
              </CarouselContainer>

              <RightMenuContainer>
                <FavIcon>
                  <IconButton
                    color="default"
                    aria-label="add an alarm"
                    onClick={() => likeButton()}
                  >
                    <FavoriteBorderSharpIcon />
                  </IconButton>

                </FavIcon>
                <MenuText>
                  {imovel.tipo}
                </MenuText>
                <MenuText>
                  {imovel.transacao === 'L' ? 'Locação' : 'Venda'}
                </MenuText>
                <MenuText>
                  { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovel.valor)}
                </MenuText>
                <MenuText>
                  <b>Condominio:</b>
                  { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovel.valorCondominio)}
                </MenuText>
                <MenuText>
                  <b>Cidade:</b>
                  {imovel.cidade}
                </MenuText>
                <MenuText>
                  <b>Bairro:</b>
                  {imovel.bairro}
                </MenuText>
                <MenuText>
                  <b>Endereco:</b>
                  {imovel.endereco}
                </MenuText>
                <MenuText>
                  <b> Área útil: </b>
                  {imovel.areaUtil}
                  <p>m²</p>
                </MenuText>
                <MenuText>
                  observacoes:
                  {' '}
                  {imovel.observacoes}
                </MenuText>

              </RightMenuContainer>
            </ContainerUp>

            <ContainerDown>
              <HouseDetails>
                <p>
                  Descricao:
                  {' '}
                  {imovel.descricao}
                </p>
              </HouseDetails>

              <HouseIcons>

                {/* <InfoP>
                  {imovel.destaque === true ? <StarBorderIcon style={{ fontSize: 50 }} /> : ''}
                </InfoP> */}

                <InfoP>
                  {imovel.tipo === 'Casa' ? <HomeIcon style={{ fontSize: 50 }} /> : <ApartmentIcon style={{ fontSize: 50 }} />}
                </InfoP>

                <InfoP>
                  <BathtubIcon style={{ fontSize: 50 }} />
                  {imovel.banheiros}
                </InfoP>

                <InfoP>
                  <HotelIcon style={{ fontSize: 50 }} />
                  {imovel.dormitorios}
                </InfoP>

                <InfoP>
                  <ShuffleSharpIcon style={{ fontSize: 50 }} />
                  {(imovel.transacao === 'V' ? 'Venda' : 'Locação')}
                </InfoP>
              </HouseIcons>
            </ContainerDown>

          </PapperContainer>
        </Fade>
      </Modal>
    </Container>
  );
};
