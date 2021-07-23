import React, {useState} from 'react';
import styled from 'styled-components';

const App = () => {

    const Wrapper = styled.div``

    const Track = styled.div``

    // Zamiast tego poprostu jak mam importy tych trenerów to jako obiekt by poszły, albo tablica i tutaj by było
    // import trainers from '...'
    // trainers.map() 
    const [list, setList] = useState([
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKLN93P5GLY7wN_P--CTtNLmSYDyzxNkVpzMOKHns_hAzA-y-knoJqyvgegaF3566ddFQ&usqp=CAU',
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/white-wall-no-text-zoom-background-design-template-97c17d6215f14409c88b085599f9ac86_screen.jpg?ts=1586909055',
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVuJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80',
        'https://i.pinimg.com/originals/d5/c8/7c/d5c87c9160550d386791069339bbd762.jpg',
        'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg',
        'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg',
        'https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg',
        'https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png',
        'https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/before-after/s7-before-ed6ae655510032cc0796d90544c22618cae884e7ede7af2e0a9bdb8d7bb0e554.jpg',
    ])
    const [counter, setCounter] = useState(0)

    const handleOnClick = () => {        
        const deletedItem = list.shift()

        setList([...list, deletedItem])
        
        if(counter < list.length) setCounter(counter + 1)
        else setCounter(0)
    }

  return (
    <>
        <Wrapper style={{width: 'auto', height: '350px', border: '2px solid red', display: 'flex', overflow: 'hidden'}}>
            <Track style={{width: `${320*list.length}px`}}>
                {list.map(element => <img key={element} src={element} style={{width: '300px', marginRight: '20px', height: '100%'}} /> )}
            </Track>
        </Wrapper>
        <button onClick={() => handleOnClick()}>Add new</button>
    </>
  );
}

export default App;
