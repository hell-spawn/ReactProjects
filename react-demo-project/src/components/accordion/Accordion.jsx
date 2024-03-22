import data from './data'
import './accordion.css'
import { useState } from 'react'

const Accordion = () => {

  const [selected, setSelected] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [itemsSelected, setItemsSelected] = useState([]);

  function handlerMultipleSelectionToggle() {
    setMultipleSelection(!multipleSelection);
    setItemsSelected([]);
  }

  function handlerSelection(itemId) {
    if(multipleSelection) {
      handlerMultipleSelection(itemId);
    } else {
      handlerSingleSelection(itemId);
    }
  }

  function handlerMultipleSelection(itemId) {
    if(itemsSelected.includes(itemId)) {
      setItemsSelected(itemsSelected.filter(item => item !== itemId));
    } else {
      setItemsSelected([...itemsSelected, itemId]);
    } 
  }

  function handlerSingleSelection(itemId) {
    if(selected === itemId) {
      setSelected(null);
      return;
    }
    setSelected(itemId);
  }

  function isOpenItem(itemId) {
    if(multipleSelection) {
      return itemsSelected.includes(itemId);
    } else {
      return selected === itemId;
    }
  }

  return (
    <>
    <div className="accordion">
      {data && data.length ? data.map((item) => (
         <div className="accordion-item" key={item.id}>
            <div className={"accordion-header" + (isOpenItem(item.id) ? " item-active" : "")}>
              <h4>
                <a role="button" href="#collapse{item.id}" onClick={ () => handlerSelection(item.id) }> {item.header} </a>
              </h4>
            </div>
            {
              isOpenItem(item.id) ? 
                <div className="accordion-body slideInDown"><p>{item.body}</p></div> :
                null 
            }
          </div>   
      )) : <p>No data</p>}
    </div>
    <div className="row">
      <div className="col col-2 offset-10">
        <button className="btn btn-primary" onClick={handlerMultipleSelectionToggle}>Enable Multiple Selection</button>
      </div>
    </div>
    </>
  );
}

export default Accordion
