import React, { useEffect, useState } from "react";

import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ModalAdd from "./components/ModalAdd";
import ModalDelete from "./components/ModalDelete";


const Calendrier = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenDeleteTache, setModalIsOpenDeleteTache] = useState(false);

  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
      console.log(modalIsOpen)    
    axios.get("http://localhost:4000/api/calendar/findall").then((data) => {
      setCalendar(data.data);
    });
  }, []);


  const eventsCalendar = () => {
    const res = calendar.map((event) => {
      return {
        title:
          event.nom_user +" "+
          event.raison +" "+
          event.heureDebut,
        start: event.start,
        end: event.end,
        backgroundColor:"rgb(239, 187, 174)",
        color: "black",
        textColor: "rgba(0, 0, 0, 1)",
        overflow: "hidden",
        overflowWrap: 'break-word'
        //onvrdisplaypresentchange : deletedTache(event._id)
      };
    });
    return res;
  };




  return (
    <div>
          {modalIsOpen ==true ? (<ModalAdd calendar={calendar} setCalendar={setCalendar} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />) : (<div></div>)  }      
          {modalIsOpenDeleteTache ==true ? (<ModalDelete calendar={calendar} setCalendar={setCalendar} modalIsOpenDeleteTache={modalIsOpenDeleteTache} setModalIsOpenDeleteTache={setModalIsOpenDeleteTache} />) : (<div></div>)  }      
      
      <div className="test" style={{    display: "flex",
    flexDirection: "row",
    gridGap: "10px"}}>
  
        <div className="">
          <button
          style={{padding:"10px"}}
            type="button"
            className="btn_nouvelle_comptes"
            onClick={() => setModalIsOpen(true)}
          >
            Nouvelle Tâche +{" "}
          </button>
        </div>
        <div className="">
          <button
          style={{padding:"10px"}}
            type="button"
            className="btn_nouvelle_comptes"
            onClick={() => setModalIsOpenDeleteTache(true)}
          >
            Supprimer Tâche +{" "}
          </button>
        </div>

      </div>

      <div className="row">
        <div
          id="calendar"
          style={{
            position: "relative",
            zIndex: 0,
          }}
        >
          <FullCalendar
            defaultView="dayGridMonth"
            height={650}
            aspectRatio={6}
            plugins={[dayGridPlugin]}
            themeSystem="bootstrap4"
            weekends={false}
            locale="fr"
            events={eventsCalendar()}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendrier;
