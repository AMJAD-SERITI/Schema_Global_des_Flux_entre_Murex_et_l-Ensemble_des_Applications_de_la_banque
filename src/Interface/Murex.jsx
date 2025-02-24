import React, { useState } from 'react';
import logo from '../image/logo.png';
import M from '../image/Mm.png';
import xmlIcon from '../image/xml.png';
import asciiIcon from '../image/ascii.png';
import csvIcon from '../image/csv.png';
import m2Icon from '../image/M2.png'; // Importation de l'icône M2.png
import Legend from '../Legend'; // Import the Legend component
import im1 from '../image/bg1.png'; // Importation de l'image im1.png




function Murex() {
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  const [showRMDSMessage, setShowRMDSMessage] = useState(false);
  const [showM2Icon, setShowM2Icon] = useState(false); // État pour afficher l'icône M2 pour IF06
  const [showReutersMessage, setShowReutersMessage] = useState(false); // État pour afficher le message Reuters 3000 Dealing
  const [showReutersM2Icon, setShowReutersM2Icon] = useState(false); // État pour afficher l'icône M2 pour IF02
  const [showT1Message, setShowT1Message] = useState(false); // État pour afficher le message T1
  const [showIF10Details, setShowIF10Details] = useState(false); // État pour afficher les détails de IF10
  const [showIF11Details, setShowIF11Details] = useState(false); // État pour afficher les détails de IF11
  const [showIF13Details, setShowIF13Details] = useState(false); // État pour afficher les détails de IF13
  const [showHostChangeDetails, setShowHostChangeDetails] = useState(false);
  const [showIF17Details, setShowIF17Details] = useState(false); // New state variable

  const [showBackOfficeButtons, setShowBackOfficeButtons] = useState(false);
  const [showSwiftDetails, setShowSwiftDetails] = useState(false); // For SWIFT ALLIANCE
  const [showLotusDetails, setShowLotusDetails] = useState(false); // For Lotus Notes

  const [showIFswiftoutDetails, setShowIFswiftoutDetails] = useState(false); // État pour afficher les détails de IF10
  const [showIF03Details  , setShowIF03Details  ] = useState(false); // État pour afficher les détails de IF10
  const [  showDonnesStatiquesButtons, setShowDonnesStatiquesButtons  ] = useState(false); // État pour afficher les détails de IF10
  const [  showHostButtons, setShowHostButtons  ] = useState(false); // État pour afficher les détails de IF10
  const [  showIF1Buttons, setShowIF1Buttons  ] = useState(false); // État pour afficher les détails de IF10
  const [  showComptabiliteButtons, setshowComptabiliteButtons ] = useState(false); // État pour afficher les détails de IF10
  const [  showSystemeComptableButtons, setshowSystemeComptableButtons ] = useState(false); // État pour afficher les détails de IF10
  const [  showIF9Buttons, setshowIF9Buttons ] = useState(false); // État pour afficher les détails de IF10
  const [  showVamosButtons, setshowVamosButtons ] = useState(false); // État pour afficher les détails de IF10
  const [  showIF07Buttons, setshowIF07Buttons ] = useState(false); // État pour afficher les détails de IF10
  const [  showPilotageButtons, setShowPilotageButtons ] = useState(false); // État pour afficher les détails de IF10

  // Add these lines at the beginning of your Murex function
  const [showBorjCrmButtons, setShowBorjCrmButtons] = useState(false);
  const [showPilotageeButtons, setShowPilotageeButtons] = useState(false);
  const [showBorjCrmDetails, setShowBorjCrmDetails] = useState(false);
  const [showDatawarehouseButtons, setShowDatawarehouseButtons] = useState(false);
  const [showDatawarehouseDetails, setShowDatawarehouseDetails] = useState(false);
  const [ShowPilotageDetails, setShowPilotageDetails] = useState(false);
  const [  showRisqueButtons, setshowRisqueButtons] = useState(false);
  const [  showHostEdenButtons, setshowHostEdenButtons] = useState(false);
  const [  showEDENDetails, setshowEDENDetails] = useState(false);
  const [  showBalleButtons, setshowBalleButtons] = useState(false);
  const [  showIF9Details, setshowIF9Details] = useState(false);
  const [  showIF20Buttons, setshowIF20Buttons] = useState(false);
  const [  showReglementaireButtons, setshowReglementaireButtons] = useState(false);
  const [  showregButtons, setshowregButtons] = useState(false);






  const handleButtonClick = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };

  const handleRMDSClick = () => {
    setShowRMDSMessage(!showRMDSMessage);
  };

  const handleIF06Click = () => {
    setShowM2Icon(!showM2Icon); // Affiche ou cache l'icône M2 pour IF06
  };

  const handleReutersClick = () => {
    setShowReutersMessage(!showReutersMessage);
  };

  const handleReutersM2Click = () => {
    setShowReutersM2Icon(!showReutersM2Icon); // Affiche ou cache l'icône M2 pour IF02
  };

  const handleT1Click = () => {
    setShowT1Message(!showT1Message); // Affiche ou cache les détails pour T1
  };

  const handleButtonnClick = () => {
    setShowIF10Details(!showIF10Details);
    setShowIF11Details(!showIF11Details);
    setShowIF13Details(!showIF13Details);
  };


  const handleHostChangeClick = () => {
    setShowHostChangeDetails(!showHostChangeDetails);
  };

  const handleIF17Click = () => {
    setShowIF17Details(!showIF17Details); // Toggle IF12 details when IF12 - FX HOST button is clicked
  };
  const handleBackOfficeButtonClick = () => {
    setShowBackOfficeButtons(!showBackOfficeButtons);
  };

  const handleSwiftClick = () => {
    setShowSwiftDetails(!showSwiftDetails);
  };

  const handleswiftbtnClick = () => {
    setShowIFswiftoutDetails(!showIFswiftoutDetails);
  };


  const handleLotusClick = () => {
    setShowLotusDetails(!showLotusDetails);
  };


  const handleLotusbtnClick = () => {
    setShowIF03Details(!showIF03Details);
  };
  const handleDonnesStatiquesButtonClick= () => {
    setShowDonnesStatiquesButtons(!showDonnesStatiquesButtons);
  };

  const handleHostClick = () => {
    setShowHostButtons(!showHostButtons);

  };
  const handleIF1btnClick = () => {
    setShowIF1Buttons(!showIF1Buttons);

  };
  const handleComptabiliteButtonClick = () => {
    const show = !showComptabiliteButtons;
    setshowComptabiliteButtons(show);
  };

  const handleSystemeComptableClick = () => {
    setshowSystemeComptableButtons(!showSystemeComptableButtons);
  };

  const handleIF9btnClick = () => {
    setshowIF9Buttons(!showIF9Buttons);
  };

  const handleVamosClick = () => {
    setshowVamosButtons(!showVamosButtons);
  };
  const handleIF07btnClick = () => {
    setshowIF07Buttons(!showIF07Buttons);
  };

  const handlePilotageButtonClick = () => {
    setShowPilotageButtons(!showPilotageButtons);
  }


  const handleBorjCrmClick = () => {
    setShowBorjCrmButtons(!showBorjCrmButtons);
  };



  const handlePilotageClick = () => {
    setShowPilotageeButtons(!showPilotageeButtons);
  };
  const handleBorjCrmDetailsClick = () => {
    setShowBorjCrmDetails(!showBorjCrmDetails);
  };

  const handleDatawarehouseClick = () => {
    setShowDatawarehouseButtons(!showDatawarehouseButtons);
  };

  const handleDatawarehouseDetailsClick = () => {
    setShowDatawarehouseDetails(!showDatawarehouseDetails);
  };

  const handlePilotageDetailsClick = () => {
    setShowPilotageDetails(!ShowPilotageDetails);
  };

  const handleRisqueButtonClick = () => {
    setshowRisqueButtons(!showRisqueButtons);
  };

  const handleHostEdenClick = () => {
    setshowHostEdenButtons(!showHostEdenButtons);
  };

  const handleEDENDetailsClick = () => {
    setshowEDENDetails(!showEDENDetails);
  };

  const handleBalleClick = () => {
    setshowBalleButtons(!showBalleButtons);
  };

  const handleIF9DetailsClick = () => {
    setshowIF9Details(!showIF9Details);
  };


  const handleIF20btnClick = () => {
    setshowIF20Buttons(!showIF20Buttons);
  };

  const handleReglementaireClick = () => {
    setshowReglementaireButtons(!showReglementaireButtons);
  };

  const handleregButtonClick = () => {
    setshowregButtons(!showregButtons);
  };





  const styles = {
    murexContainer: {
      fontFamily: 'Arial, sans-serif',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundImage: `url(${im1})`, // Ajoutez l'image de fond
      backgroundSize: 'cover', // Ajuste la taille de l'image
      backgroundPosition: 'center', // Centre l'image
    },
    buttonIF10: {
      backgroundColor: '#d6265b',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '1em',
      cursor: 'pointer',
      borderRadius: '4px',
      marginLeft: '150px', // Ajoutez cette ligne
    },
    buttonIF11: {
      backgroundColor: '#d6265b',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '1em',
      cursor: 'pointer',
      borderRadius: '4px',
      marginRight: '150px', // Ajoutez cette ligne
    },
    logo: {
      width: '150px',
    },
    header: {
      backgroundImage: "url('path_to_your_image')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '100px 20px',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      marginTop: '20px',
    },
    buttonContainerr: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      marginTop: '5px',
    },
    buttonRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start', // Alignement en haut pour que les boutons restent alignés
      gap: '40px', // Ajout d'espacement entre les boutons
    },
    restOfElements: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      marginTop: '10px',
    },
    button: {
      backgroundColor: '#d6265b',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '1em',
      cursor: 'pointer',
      borderRadius: '4px',
      marginBottom: '20px', // Ajoutez cette ligne
    },
    messageContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '10px',
      gap: '70px',
    },
    verticalLine: {
      width: '2px',
      height: '150px',
      backgroundColor: '#333',
      position: 'relative',
      marginLeft: '25px',
    },
    pointileeLine: {
      width: '2px',
      height: '150px',
      borderLeft: '2px dotted #333', // Ligne pointillée
      position: 'relative',
      marginLeft: '25px',
    },
    message: {
      color: '#333',
      fontWeight: 'bold',
      textAlign: 'center',
      position: 'absolute',
      top: '40%',
      left: '90%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '0 5px',
      display: 'flex',
      alignItems: 'center',
      gap: '5px', // Espace entre le texte et l'icône
    },



    xmlIcon: {
      width: '20px',
      height: '20px',
    },
    asciiIcon: {
      width: '20px',
      height: '20px',
    },
    csvIcon: {
      width: '20px',
      height: '20px',
    },
    m2Icon: {
      width: '50px',
      height: '50px',
      marginTop: '30px',
    },
    centeredLogo: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '150px',
    },
    lineContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
      gap: '20px',
    },
    line: {
      width: '100px',
      height: '2px',
      backgroundColor: '#333',
      position: 'relative',
    },
    lineLabel: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '50%',
      backgroundColor: 'white',
      padding: '0 5px',
      fontWeight: 'bold',
      color: '#333',
    },
    textBelowButton: {
      marginTop: '20px',
      fontWeight: 'bold',
      color: '#333',
    },
    horizontalLine: {
      width: '50px',
      height: '2px',
      backgroundColor: '#333',
      position: 'relative',
      alignSelf: 'center',
    },
    arrow: {
      width: 0,
      height: 0,
      borderLeft: '20px solid transparent',
      borderRight: '20px solid transparent',
      borderTop: '20px solid #333',
      position: 'absolute',
      marginTop: '10px',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    arrowww: {
      width: 0,
      height: 0,
      borderLeft: '20px solid transparent',
      borderRight: '20px solid transparent',
      borderBottom: '20px solid #333', // Change this line
      position: 'absolute',
      marginTop: '-150px',
      left: '90%',
      transform: 'translate(-50%, -50%)',
    },
    buttonNavy: {
      backgroundColor: 'Navy', // Couleur pour RMDS
      color: 'white',
      border: 'none',
      padding: '10px 40px', // Increase the horizontal padding
      fontSize: '1em',
      cursor: 'pointer',
      borderRadius: '4px',
      marginBottom: '20px', // Ajoutez cette ligne
    },

    buttonNavvy: {
      backgroundColor: 'Navy', // Couleur pour RMDS
      color: 'white',
      border: 'none',
      padding: '10px 60px', // Increase the horizontal padding
      fontSize: '1em',
      cursor: 'pointer',
      borderRadius: '4px',
      marginBottom: '20px',
      whiteSpace: 'nowrap',

    },

    buttonNavyy: {
      backgroundColor: 'Navy',
      color: 'white',
      border: 'none',
      padding: '10px 230px',
      fontSize: '1em',
      cursor: 'pointer',
      borderRadius: '4px',
      marginBottom: '20px',
      whiteSpace: 'nowrap',
      marginRight:'10px',
    },


    buttonblue: {
      backgroundColor: 'blue', // Couleur pour RMDS
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '1em',
      cursor: 'pointer',
      borderRadius: '10px',
      marginBottom: '20px', // Ajoutez cette ligne
    },
    buttonbluee: {
      backgroundColor: 'blue', // Couleur pour RMDS
      color: 'white',
      border: 'none',
      padding: '10px 110px',
      fontSize: '1em',
      cursor: 'pointer',
      borderRadius: '10px',
      marginBottom: '20px',
      whiteSpace: 'nowrap',
    },

    buttonblueee: {
      backgroundColor: 'blue',
      color: 'white',
      border: 'none',
      padding: '10px 370px',
      fontSize: '1em',
      cursor: 'pointer',
      borderRadius: '10px',
      marginBottom: '20px',
      whiteSpace: 'nowrap',
    },

    buttonSwiftAlliance: {
      backgroundColor: 'Navy',
      color: 'white',
      border: 'none',
      padding: '10px 250px',
      fontSize: '1em',
      cursor: 'pointer',
      borderRadius: '4px',
      marginBottom: '20px', // Ajoutez cette ligne
      whiteSpace: 'nowrap', // Ajoutez cette ligne
    },
    buttonLotusNotes: {
      backgroundColor: 'Navy', // Couleur pour RMDS
      color: 'white',
      border: 'none',
      padding: '10px 130px', // Increase the horizontal padding
      fontSize: '1em',
      cursor: 'pointer',
      borderRadius: '4px',
      marginBottom: '20px', // Ajoutez cette ligne
      whiteSpace: 'nowrap', // Ajoutez cette ligne
    },


  };
  return (
      <div style={styles.murexContainer}>
        <nav style={styles.navbar}>
          <img src={M} style={styles.logo} alt="Murex Logo"/>
          <div style={styles.legendWrapper}>
            <Legend/>
          </div>
        </nav>
        <div style={{...styles.header,marginTop:'-60px'}}>
          <img src={logo} style={styles.centeredLogo} alt="Centered Logo"/>
          <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={handleButtonClick}>
              ENVIRONNEMENT FRONT OFFICE
            </button>

            {showAdditionalButtons && (
                <div style={styles.buttonRow}>
                  <div style={{width: '90px', marginLeft: '-20px', marginTop: '-15px'}}>
                    <button style={styles.buttonNavy} onClick={handleRMDSClick}>
                      RMDS
                    </button>
                    {showRMDSMessage && (
                        <div style={styles.restOfElements}>
                          <div style={styles.messageContainer}>
                            <div style={{position: 'relative', marginLeft: '10px'}}>
                              <div style={styles.verticalLine}></div>
                              <div style={styles.message}>Zone de pages Reuters</div>
                            </div>
                            <div style={{position: 'relative'}}>
                              <div style={styles.verticalLine}></div>
                              <div style={styles.message}>
                                Envoi des codes RIC
                                <img src={xmlIcon} alt="XML Icon" style={styles.xmlIcon}/>
                              </div>
                            </div>
                          </div>
                          <button style={{...styles.buttonblue,marginLeft:'35px'}} onClick={handleIF06Click}>
                            IF06 - Market Data System RMDS
                          </button>
                          {showM2Icon && (
                              <div style={styles.messageContainer}>
                                <div style={{position: 'relative', marginLeft: '20px'}}>
                                  <div style={styles.verticalLine}>
                                    <div style={styles.message}>
                                      "Fil de l'eau et Batch"
                                    </div>
                                  </div>
                                  <div style={styles.arrow}></div>
                                  <div>
                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>
                              </div>
                          )}
                        </div>
                    )}
                  </div>
                  <div style={{width: '400px', marginTop: '-15px'}}>
                    <button style={styles.buttonNavy} onClick={handleHostChangeClick}>
                      HOST CHANGE
                    </button>
                    {showHostChangeDetails && (
                        <div style={styles.restOfElements}>
                          <div style={styles.messageContainer}>
                            <div style={{position: 'relative', marginRight: '20px', width: '70px'}}>
                              <div style={{...styles.pointileeLine}}>
                                <div style={styles.message}>
                                  Carnet d'ordre(2) & Frais bancaire


                                  <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>


                                </div>

                              </div>
                            </div>
                            <div style={{position: 'relative', marginRight: '30px'}}>
                              <div style={styles.pointileeLine}></div>
                              <div style={styles.message}>
                                Cours Max/Min/Mid EOD(1)
                                <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                              </div>
                              <div style={styles.arrowww}></div>
                            </div>
                          </div>
                          <button style={{...styles.buttonblue, padding: '10px 40px'}} onClick={handleIF17Click}>
                            IF12 - FX HOST
                          </button>
                          {showIF17Details && (
                              <div style={styles.if17Details}>
                                <div style={styles.messageContainer}>
                                  <div style={{marginLeft: '-50px', width: '80px'}}>
                                    <div style={styles.pointileeLine}>
                                      <div style={styles.message}>
                                        "Une à plusieurs fois par jour pour carnet d'ordre"
                                      </div>
                                      <div style={{...styles.arrow, marginTop: '150px', marginLeft: '-1px'}}></div>
                                    </div>
                                    <div>
                                      <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                    </div>
                                  </div>
                                  <div style={{position: 'relative', marginRight: '-20px', width: '50px', top: '10px'}}>
                                    <div style={styles.pointileeLine}>
                                      <div style={styles.message}>
                                        "1 fois par jour vers 20h après le EOD"
                                      </div>
                                    </div>
                                    <div>
                                      <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          )}
                        </div>
                    )}
                  </div>
                  <div style={{width: '400px', marginTop: '-15px'}}>
                    <button style={styles.buttonNavy} onClick={handleReutersClick}>
                      Reuters 3000 Dealing
                    </button>
                    {showReutersMessage && (
                        <div style={styles.restOfElements}>
                          <div style={styles.messageContainer}>
                            <div style={{position: 'relative'}}>
                              <div style={styles.verticalLine}></div>
                              <div style={styles.message}>
                                Transfert des Transactions
                                <img src={asciiIcon} alt="ASCII Icon" style={styles.asciiIcon}/>
                              </div>
                            </div>
                          </div>
                          <button style={styles.buttonblue} onClick={handleReutersM2Click}>
                            IF02-REUTERS 3000 DEALING
                          </button>
                          {showReutersM2Icon && (
                              <div style={styles.messageContainer}>
                                <div style={{position: 'relative', marginLeft: '20px'}}>
                                  <div style={styles.verticalLine}>
                                    <div style={styles.message}>
                                      "Fil de l'eau"
                                    </div>
                                  </div>
                                  <div style={styles.arrow}></div>
                                  <div>
                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>
                              </div>
                          )}
                        </div>
                    )}
                  </div>
                  <div style={{width: '400px', marginTop: '-15px'}}>
                    <button style={styles.buttonNavy} onClick={handleT1Click}>
                      TI - Transactions Internationales
                    </button>
                    {showT1Message && (
                        <div style={styles.restOfElements}>
                          <div style={styles.messageContainer}>
                            <div style={{position: 'relative', marginRight: '20px', width: '50px'}}>
                              <div style={styles.pointileeLine}></div>
                              <div style={styles.message}>
                                Carnet d'ordre
                                <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                              </div>
                            </div>
                            <div style={{position: 'relative', marginRight: '30px'}}>
                              <div style={styles.pointileeLine}></div>
                              <div style={styles.message}>
                                Cours négociés
                                <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                              </div>
                              <div style={styles.arrowww}></div>
                            </div>
                            <div style={{position: 'relative', marginLeft: '30px'}}>
                              <div style={styles.pointileeLine}></div>
                              <div style={styles.message}>
                                Cours Max, Min et Mid EOD
                                <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                              </div>
                              <div style={styles.arrowww}></div>
                            </div>
                          </div>
                          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                            <button style={{...styles.buttonblue, marginRight: '20px'}} onClick={handleButtonnClick}>
                              IF10 - International Operations IN
                            </button>
                            <button style={{...styles.buttonblue, marginRight: '20px'}} onClick={handleButtonnClick}>
                              IF11 - International Operations Fixing
                            </button>
                            <button style={styles.buttonblue} onClick={handleButtonnClick}>
                              IF13 - International Operations OUT
                            </button>
                          </div>
                          {showIF10Details && (
                              <div style={styles.if10Details}>
                                <div style={styles.messageContainer}>
                                  <div style={{position: 'relative'}}>
                                    <div style={styles.pointileeLine}>
                                      <div style={styles.message}>
                                        "Toutes les 2 heures"
                                      </div>
                                    </div>
                                    <div style={styles.arrow}></div>
                                    <div>
                                      <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                    </div>
                                  </div>
                                  <div style={{position: 'relative', marginLeft: '30px'}}>
                                    <div style={styles.pointileeLine}>
                                      <div style={styles.message}>
                                        "4 Fois/Jour"
                                      </div>
                                    </div>
                                    <div>
                                      <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                    </div>
                                  </div>
                                  <div style={{position: 'relative', marginLeft: '30px'}}>
                                    <div style={styles.pointileeLine}>
                                      <div style={styles.message}>
                                        "1 Fois/Jour entre 15h:30 et 16h"
                                      </div>
                                    </div>
                                    <div>
                                      <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          )}
                        </div>
                    )}
                  </div>
                </div>
            )}
          </div>
          <button style={styles.button} onClick={handleBackOfficeButtonClick}>
            ENVIRONNEMENT BACK OFFICE (Confirmation , R/L)
          </button>
          {showBackOfficeButtons && (
              <div style={styles.buttonRow}>
                <div style={{width: '500px', marginLeft: '170px'}}>
                  <button style={styles.buttonSwiftAlliance} onClick={handleSwiftClick}>
                    SWIFT ALLIANCE
                  </button>
                  {showSwiftDetails && (
                      <div style={styles.restOfElements}>
                        <div style={{position: 'relative', marginRight: '490px'}}>
                          <div style={styles.pointileeLine}></div>
                          <div style={styles.message}>
                            Confirmations
                            <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                          </div>
                          <div style={styles.arrowww}></div>
                        </div>
                        <div style={{
                          position: 'relative', marginLeft: '50px', marginRight: '190px', marginTop: '-160px'
                        }}>
                          <div style={styles.pointileeLine}></div>
                          <div style={styles.message}>
                            Règlement/Livraison (Settlements/Deliveries)
                            <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                          </div>
                          <div style={styles.arrowww}></div>
                        </div>
                        <div style={{
                          position: 'relative', marginLeft: '375px', marginRight: '190px', marginTop: '-160px'
                        }}>
                          <div style={styles.pointileeLine}></div>
                          <div style={styles.message}>
                            Paiement (Cash Payments)
                            <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                          </div>
                          <div style={styles.arrowww}></div>
                        </div>
                        <div style={{
                          position: 'relative', marginLeft: '650px', marginRight: '190px', marginTop: '-160px'
                        }}>
                          <div style={styles.pointileeLine}></div>
                          <div style={styles.message}>
                            Confirmations
                            <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                          </div>
                        </div>
                        <div style={{
                          position: 'relative', marginLeft: '920px', marginRight: '190px', marginTop: '-160px'
                        }}>
                          <div style={styles.pointileeLine}></div>
                          <div style={styles.message}>
                            Avis de debit/crédit
                            <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                          </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-start', position: 'relative'}}>
                          <button style={{...styles.buttonbluee, marginRight: '40px', marginLeft: '-90px'}}
                                  onClick={handleswiftbtnClick}>
                            IF05 - SWIFT OUT
                          </button>
                          <button
                              style={{...styles.buttonblue, position: 'absolute', left: '388px', whiteSpace: 'nowrap',}}
                              onClick={handleswiftbtnClick}>
                            IF05 - SWIFT IN
                          </button>
                        </div>
                        {showIFswiftoutDetails && (
                            <div style={styles.messageContainer}>
                              <div style={{
                                position: 'relative',
                                gap: '-30px',
                                marginLeft: '170px',
                                justifyContent: 'space-between'
                              }}>
                                <div style={styles.pointileeLine}>
                                  <div style={{...styles.message, marginRight: '20px'}}>
                                    "Fil de l'eau"
                                  </div>
                                </div>
                                <div>
                                  <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                </div>
                              </div>
                              <div style={{position: 'relative', marginRight: '50px', marginLeft: '70px'}}>
                                <div style={styles.pointileeLine}>
                                  <div style={styles.message}>
                                    "Fil de l'eau"
                                  </div>
                                </div>
                                <div>
                                  <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                </div>
                              </div>
                              <div style={{position: 'relative', marginRight: '20px'}}>
                                <div style={styles.pointileeLine}>
                                  <div style={styles.message}>
                                    "Fil de l'eau"
                                  </div>
                                </div>
                                <div>
                                  <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                </div>
                              </div>
                              <div style={{position: 'relative',}}>
                                <div style={styles.pointileeLine}>
                                  <div style={styles.message}>
                                    "Fil de l'eau"
                                  </div>
                                </div>
                                <div style={styles.arrow}></div>
                                <div>
                                  <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                </div>
                              </div>
                              <div style={{position: 'relative', marginRight: '50px', marginLeft: '20px'}}>
                                <div style={styles.pointileeLine}>
                                  <div style={styles.message}>
                                    "Fil de l'eau"
                                  </div>
                                </div>
                                <div style={styles.arrow}></div>
                                <div>
                                  <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                </div>
                              </div>
                            </div>
                        )}
                      </div>
                  )}
                </div>
                <div style={{width: '600px', marginLeft: '190px',}}>
                  <button style={styles.buttonLotusNotes} onClick={handleLotusClick}>
                    Lotus Notes
                  </button>
                  {showLotusDetails && (
                      <div style={styles.restOfElements}>
                        <div style={styles.messageContainer}>
                          <div style={{position: 'relative', marginRight: '70px'}}>
                            <div style={styles.pointileeLine}></div>
                            <div style={styles.message}>Avis
                              <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/></div>
                            <div style={styles.arrowww}></div>
                          </div>
                          <div style={{position: 'relative', marginRight: '50px'}}>
                            <div style={styles.pointileeLine}></div>
                            <div style={styles.message}>
                              Confirmations Dérivés
                              <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/></div>
                            <div style={styles.arrowww}></div>
                          </div>
                          <div style={{position: 'relative'}}>
                            <div style={styles.pointileeLine}></div>
                            <div style={styles.message}>
                              Confirmations Cash
                              <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/></div>
                            <div style={styles.arrowww}></div>

                          </div>
                        </div>
                        <button style={{...styles.buttonbluee, marginRight: '40px', marginLeft: '60px'}}
                                onClick={handleLotusbtnClick}>
                          IF03 - Client Messaging
                        </button>
                        {showIF03Details && (
                            <div style={styles.messageContainer}>
                              <div style={{position: 'relative', marginRight: '10px', marginLeft: '30px'}}>
                                <div style={styles.pointileeLine}>
                                  <div style={styles.message}>
                                    "Aprés chaque vacation"
                                  </div>
                                </div>
                                <div>
                                  <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                </div>
                              </div>
                              <div style={{position: 'relative', marginLeft: '30px'}}>
                                <div style={styles.pointileeLine}>
                                  <div style={styles.message}>
                                    "vacation (2h)"
                                  </div>
                                </div>
                                <div>
                                  <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                </div>
                              </div>
                              <div style={{position: 'relative', marginLeft: '30px'}}>
                                <div style={styles.pointileeLine}>
                                  <div style={styles.message}>
                                    "vacation (2h)"
                                  </div>
                                </div>
                                <div>
                                  <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                </div>
                              </div>
                            </div>
                        )}
                      </div>
                  )}
                </div>
              </div>
          )}
          <div style={styles.buttonContainerr}>
            <button style={styles.button} onClick={handleComptabiliteButtonClick}>
              ENVIRONNEMENT COMPTABILITE
            </button>
            {showComptabiliteButtons && (
                <div style={styles.buttonRow}>
                  <div style={{width: '500px', marginLeft: '170px'}}>
                    <button style={styles.buttonNavy} onClick={handleSystemeComptableClick}>
                      HOST SYSTEME COMPTABLE ( Compta Especes )
                    </button>
                    {showSystemeComptableButtons && (
                        <div style={styles.restOfElements}>
                          <div style={styles.messageContainer}>
                            <div style={{position: 'relative', marginLeft: '30px'}}>
                              <div style={styles.pointileeLine}></div>
                              <div style={styles.message}>
                                Donnes Comptable
                                <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/></div>
                              <div style={styles.arrowww}></div>
                            </div>
                          </div>
                          <button style={{...styles.buttonbluee, marginRight: '530px', marginLeft: '530px'}}
                                  onClick={handleIF9btnClick}>
                            IF9 - Systeme Comptable
                          </button>
                          {showIF9Buttons && (
                              <div style={styles.messageContainer}>
                                <div style={{position: 'relative', marginRight: '490px', marginLeft: '530px'}}>
                                  <div style={styles.pointileeLine}>
                                    <div style={styles.message}>
                                      "EOD"
                                    </div>
                                  </div>
                                  <div>
                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>
                              </div>
                          )}
                        </div>
                    )}
                  </div>
                  <div style={{width: '600px', marginLeft: '190px'}}>
                    <button style={styles.buttonNavy} onClick={handleVamosClick}>
                      VAMOS ( Compta Titres )
                    </button>
                    {showVamosButtons && (
                        <div style={styles.restOfElements}>
                          <div style={styles.messageContainer}>
                            <div style={{position: 'relative', marginLeft: '5px'}}>
                              <div style={styles.pointileeLine}></div>
                              <div style={styles.message}>
                                Flux Titres & Especes
                                <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/></div>
                              <div style={styles.arrowww}></div>
                            </div>
                          </div>
                          <button style={{...styles.buttonbluee, marginRight: '40px', marginLeft: '60px'}}
                                  onClick={handleIF07btnClick}>
                            IF07 - VAMOS Solution titre OUT
                          </button>
                          {showIF07Buttons && (
                              <div style={styles.messageContainer}>
                                <div style={{position: 'relative', marginRight: '10px', marginLeft: '30px'}}>
                                  <div style={styles.pointileeLine}>
                                    <div style={styles.message}>
                                      "Chaque 2h" & "EOD"
                                    </div>
                                  </div>
                                  <div>
                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>
                              </div>
                          )}
                        </div>
                    )}
                  </div>
                </div>
            )}
          </div>


          <div style={styles.buttonContainerr}>
            <button style={styles.button} onClick={handleDonnesStatiquesButtonClick}>
              ENVIRONNEMENT DONNEES STATIQUES
            </button>
            {showDonnesStatiquesButtons && (
                <div style={styles.buttonRow}>
                  <div style={{width: '500px', marginRight: '10px', marginTop: '-15px'}}>
                    <button style={styles.buttonNavy} onClick={handleHostClick}>
                      HOST
                    </button>
                    {showHostButtons && (
                        <div style={styles.restOfElements}>
                          <div style={styles.messageContainer}>
                            <div style={{position: 'relative', marginRight: '10px'}}>
                              <div style={styles.pointileeLine}></div>
                              <div style={styles.message}>
                                Tiers (Client SDM)
                                <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/></div>
                            </div>
                          </div>
                          <button style={{...styles.buttonbluee, marginRight: '530px', marginLeft: '530px'}}
                                  onClick={handleIF1btnClick}>
                            IF1 - referentiel Donnees statiques
                          </button>
                          {showIF1Buttons && (
                              <div style={styles.messageContainer}>
                                <div style={{position: 'relative', marginRight: '520px', marginLeft: '530px'}}>
                                  <div style={styles.pointileeLine}>
                                    <div style={styles.message}>
                                      "A la demande"
                                    </div>
                                  </div>
                                  <div>
                                    <div style={styles.arrow}></div>

                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>
                              </div>
                          )}
                        </div>
                    )}
                  </div>
                </div>
            )}
          </div>


          <div style={styles.buttonContainerr}>
            <button style={styles.button} onClick={handlePilotageButtonClick}>
              ENVIRONNEMENT PILOTAGE
            </button>
            {showPilotageButtons && (
                <div style={{...styles.buttonRow, display: 'flex', justifyContent: 'center', gap: '250px'}}>
                  <div style={{width: '200px', marginTop: '-15px'}}>
                    <button style={styles.buttonNavy} onClick={handleBorjCrmClick}>
                      BORJ CRM
                    </button>
                    {showBorjCrmButtons && (
                        <div style={styles.restOfElements}>
                          <div style={styles.messageContainer}>
                            <div style={{position: 'relative', marginRight: '10px'}}>
                              <div style={styles.pointileeLine}></div>
                              <div style={styles.message}>
                                Caractéristiques Financières des transactions
                                <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/></div>
                              <div style={styles.arrowww}></div>
                            </div>
                          </div>
                          <button
                              style={{...styles.buttonbluee, marginRight: '530px', marginLeft: '530px'}}
                              onClick={handleBorjCrmDetailsClick}
                          >
                            IF 17-BORJ CRM
                          </button>
                          {showBorjCrmDetails && (
                              <div style={styles.messageContainer}>
                                <div style={{position: 'relative', marginRight: '520px', marginLeft: '530px'}}>
                                  <div style={styles.pointileeLine}>
                                    <div style={styles.message}>
                                      "Chaque jour entre 15h30 et 20h"
                                    </div>
                                  </div>
                                  <div>

                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>
                              </div>
                          )}
                        </div>
                    )}
                  </div>

                  <div style={{width: '200px', marginTop: '-15px'}}>
                    <button style={styles.buttonNavy} onClick={handleDatawarehouseClick}>
                      DATAWAREHOUSE
                    </button>
                    {showDatawarehouseButtons && (
                        <div style={styles.restOfElements}>
                          <div style={styles.messageContainer}>
                            <div style={{position: 'relative', marginRight: '10px'}}>
                              <div style={styles.pointileeLine}></div>
                              <div style={styles.message}>
                                Caractéristiques Financières des transactions
                                <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/></div>
                              <div style={styles.arrowww}></div>
                            </div>
                          </div>
                          <button
                              style={{...styles.buttonbluee, marginRight: '530px', marginLeft: '530px'}}
                              onClick={handleDatawarehouseDetailsClick}
                          >
                            IF18-DATAWAREHOUSE
                          </button>
                          {showDatawarehouseDetails && (
                              <div style={styles.messageContainer}>
                                <div style={{position: 'relative', marginRight: '520px', marginLeft: '530px'}}>
                                  <div style={styles.pointileeLine}>
                                    <div style={styles.message}>
                                      "EOD"
                                    </div>
                                  </div>
                                  <div>
                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>
                              </div>
                          )}
                        </div>
                    )}
                  </div>

                  <div style={{width: '200px', marginTop: '-15px'}}>
                    <button style={styles.buttonNavy} onClick={handlePilotageClick}>
                      PILOTAGE
                    </button>
                    {showPilotageeButtons && (
                        <div style={styles.restOfElements}>
                          <div style={styles.messageContainer}>
                            <div style={{position: 'relative', marginRight: '10px'}}>
                              <div style={styles.pointileeLine}></div>
                              <div style={styles.message}>
                                Ecritures comptables
                                <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                              </div>
                              <div style={styles.arrowww}></div>
                            </div>


                            <div style={{position: 'relative', marginLeft: '50px'}}>
                              <div style={styles.pointileeLine}></div>
                              <div style={styles.message}>
                                Caractéristiques Financières des transactions
                                <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                              </div>
                              <div style={styles.arrowww}></div>
                            </div>


                          </div>
                          <button
                              style={{...styles.buttonbluee, marginRight: '530px', marginLeft: '530px'}}
                              onClick={handlePilotageDetailsClick}
                          >
                            IF 16-Pilotage
                          </button>
                          {ShowPilotageDetails && (
                              <div style={styles.messageContainer}>
                                <div style={{position: 'relative', marginRight: '520px', marginLeft: '530px'}}>
                                  <div style={styles.pointileeLine}>
                                    <div style={styles.message}>
                                      "Tous les jours apres EOD"
                                    </div>
                                  </div>
                                  <div>
                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>
                              </div>
                          )}
                        </div>
                    )}
                  </div>
                </div>
            )}
          </div>


          <div style={styles.buttonContainerr}>
            <button style={styles.button} onClick={handleRisqueButtonClick}>
              ENVIRONNEMENT RISQUE
            </button>
            {showRisqueButtons && (
                <div style={{
                  ...styles.buttonRow,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '250px',
                  marginRight: '290px'
                }}>
                  <div style={{width: '200px', marginTop: '-25px', marginLeft: '-250px'}}> {/* Adjusted marginLeft */}
                    <button style={styles.buttonNavvy} onClick={handleHostEdenClick}>
                      HOST EDEN
                    </button>
                    {showHostEdenButtons && (
                        <div style={styles.restOfElements}>
                          <div style={styles.messageContainer}>
                            <div style={{position: 'relative', marginRight: '27px'}}>
                              <div style={styles.pointileeLine}></div>
                              <div style={styles.message}>
                                Encours détaillé
                                <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                              </div>
                              <div style={styles.arrowww}></div>
                            </div>

                            <div style={{position: 'relative', marginLeft: '50px'}}>
                              <div style={styles.pointileeLine}></div>
                              <div style={styles.message}>
                                Encours Global
                                <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                              </div>
                              <div style={styles.arrowww}></div>
                            </div>
                          </div>

                          <button
                              style={{...styles.buttonbluee, marginRight: '530px', marginLeft: '530px'}}
                              onClick={handleEDENDetailsClick}
                          >
                            IF 14-EDEN
                          </button>

                          {showEDENDetails && (
                              <div style={styles.messageContainer}>
                                <div style={{position: 'relative', marginLeft: '10px'}}>
                                  <div style={styles.pointileeLine}>
                                    <div style={styles.message}>
                                      "1 fois/jour"
                                    </div>
                                  </div>
                                  <div>
                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>

                                <div style={{position: 'relative', width: '50px', marginLeft: '60px'}}>
                                  <div style={styles.pointileeLine}>
                                    <div style={styles.message}>
                                      "1 fois/jour"
                                    </div>
                                  </div>
                                  <div>
                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>
                              </div>
                          )}
                        </div>
                    )}
                  </div>

                  <div style={{
                    width: '200px',
                    marginTop: '-25px',
                    marginRight: '50px'
                  }}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>

                    <button style={{...styles.buttonNavyy, marginLeft: '-120px'}} onClick={handleBalleClick}>
                      BALLE II FERMAT
                    </button>
                      <button style={{...styles.buttonNavvy,marginLeft: '50px'}} onClick={handleBalleClick}>
                        HOST
                      </button>
                    </div>
                    {showBalleButtons && (


                        <div style={styles.restOfElements}>
                          <div style={{display: 'flex', justifyContent: 'space-between'}}>

                            <div style={styles.messageContainer}>
                              <div style={{
                                position: 'relative',
                                marginRight: '90px',
                                marginLeft: '350px'
                              }}> {/* Increase marginRight */}
                                <div style={styles.pointileeLine}></div>
                                <div style={styles.message}>
                                  Informations sur les transactions
                                  <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                                </div>
                                <div style={styles.arrowww}></div>
                              </div>

                              <div style={{
                                position: 'relative',
                                marginRight: '110px',
                                gap: '-3px',
                                marginLeft: '-10px'
                              }}>
                                <div style={styles.pointileeLine}></div>
                                <div style={styles.message}>
                                  Référentielles
                                  <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                                </div>
                                <div style={styles.arrowww}></div>
                              </div>

                              <div style={{position: 'relative', marginRight: '50px'}}> {/* Increase marginRight */}
                                <div style={styles.pointileeLine}></div>
                                <div style={styles.message}>
                                  Flux Comptables
                                  <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                                </div>
                                <div style={styles.arrowww}></div>
                              </div>

                              <div style={{position: 'relative', marginRight: '50px'}}> {/* Increase marginRight */}
                                <div style={styles.pointileeLine}></div>
                                <div style={styles.message}>
                                  Positions de change/devises
                                  <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                                </div>
                                <div style={styles.arrowww}></div>
                              </div>

                              <div style={{
                                position: 'relative',
                                marginRight: '50px',
                                marginLeft: '30px'
                              }}> {/* Increase marginRight */}
                                <div style={styles.pointileeLine}></div>
                                <div style={styles.message}>
                                  Informations Tiers
                                  <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/>
                                </div>
                                <div style={styles.arrowww}></div>
                              </div>
                            </div>
                          </div>

                          <button
                              style={{...styles.buttonblueee, marginLeft: '360px', marginRight: '30px'}}
                              onClick={handleIF9DetailsClick}>
                            IF9-BALLE II
                          </button>

                          {showIF9Details && (
                              <div style={styles.messageContainer}>
                                <div style={{position: 'relative', marginRight: '30px', marginLeft: '370px'}}>
                                  <div style={styles.pointileeLine}>
                                    <div style={styles.message}>
                                      "Semestrielle (30/06 et 31/12)"
                                    </div>
                                  </div>
                                  <div>
                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>
                                <div style={{position: 'relative', marginRight: '30px', marginLeft: '30px'}}>
                                  <div style={styles.pointileeLine}>
                                    <div style={styles.message}>
                                      "Semestrielle (30/06 et 31/12)"
                                    </div>
                                  </div>
                                  <div>
                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>

                                <div style={{position: 'relative', marginRight: '30px', marginLeft: '30px'}}>
                                  <div style={styles.pointileeLine}>
                                    <div style={styles.message}>
                                      "Semestrielle (30/06 et 31/12)"
                                    </div>
                                  </div>
                                  <div>
                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>

                                <div style={{position: 'relative', marginRight: '30px', marginLeft: '30px'}}>
                                  <div style={styles.pointileeLine}>
                                    <div style={styles.message}>
                                      "Semestrielle (30/06 et 31/12)"
                                    </div>
                                  </div>
                                  <div>
                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>

                                <div style={{position: 'relative', marginRight: '50px', marginLeft: '30px'}}>
                                  <div style={styles.pointileeLine}>
                                    <div style={styles.message}>
                                      "Semestrielle (30/06 et 31/12)"
                                    </div>
                                  </div>
                                  <div>
                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>


                              </div>
                          )}
                        </div>
                    )}


                  </div>
                </div>
            )}
          </div>


          <div style={styles.buttonContainerr}>
            <button style={styles.button} onClick={handleregButtonClick}>
              ENVIRONNEMENT REGLEMENTAIRE
            </button>
            {showregButtons && (
                <div style={styles.buttonRow}>
                  <div style={{width: '500px', marginRight: '10px', marginTop: '-15px'}}>
                    <button style={styles.buttonNavy} onClick={handleReglementaireClick}>
                      HOST
                    </button>
                    {showReglementaireButtons && (
                        <div style={styles.restOfElements}>
                          <div style={styles.messageContainer}>
                            <div style={{position: 'relative', marginRight: '10px'}}>
                              <div style={styles.pointileeLine}></div>
                              <div style={styles.message}>
                                Donnees clients

                                <img src={csvIcon} alt="CSV Icon" style={styles.csvIcon}/></div>
                              <div style={styles.arrowww}></div>

                            </div>
                          </div>
                          <button style={{...styles.buttonbluee, marginRight: '530px', marginLeft: '530px'}}
                                  onClick={handleIF20btnClick}>
                            IF20 - BRS
                          </button>
                          {showIF20Buttons && (
                              <div style={styles.messageContainer}>
                                <div style={{position: 'relative', marginRight: '520px', marginLeft: '530px'}}>
                                  <div style={styles.pointileeLine}>
                                    <div style={styles.message}>
                                      "1 fois/mois"
                                    </div>
                                  </div>
                                  <div>
                                    <img src={m2Icon} alt="M2 Icon" style={styles.m2Icon}/>
                                  </div>
                                </div>
                              </div>
                          )}
                        </div>
                    )}
                  </div>
                </div>
            )}
          </div>c


        </div>
      </div>
  );
}

export default Murex;
