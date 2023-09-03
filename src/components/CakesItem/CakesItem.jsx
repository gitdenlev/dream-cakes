import CakesBlock from "../../components/CakesBlock/CakesBlock";
import css from '../../components/CakesBlock/CakesBlock.module.scss';

const CakesItem = () => {
    return (
      <>
        <ul className={css.list}>
          <li>
            <CakesBlock
              title="Полунична фантазія"
              price="450.00"
              urlImage="https://i.ibb.co/gJLMfN7/strawberry-cake.jpg"
              weight="1.50 кг"
              description="Солодке переплетіння мрій та соковитої спілої полуниці, що розкривається на язиці, ніби загадковий сюжет літнього роману."
            />
          </li>
          <li>
            <CakesBlock
              title="Малинова гармонія"
              price="450.00"
              urlImage="https://i.ibb.co/CW3RMMN/raspberry-cake.jpg"
              weight="1.50 кг"
              description="Дивовижний танець ніжної малини та бісквіта, де кожен ковзок підкреслює чарівну гармонію смаків."
            />
          </li>
          <li>
            <CakesBlock
              title="Карамельний екстаз"
              price="400.00"
              urlImage="https://i.ibb.co/Tq8gwX8/caramel-cake.jpg"
              weight="1.50 кг"
              description="Відчуття безмежної радості, коли карамель танцює на язиці, пробуджуючи найсміливіші солодкі фантазії."
            />
          </li>
          <li>
            <CakesBlock
              title="Вишневий покров"
              price="450.00"
              urlImage="https://i.ibb.co/Dpt8J1F/cherry-cake.jpg"
              weight="1.50 кг"
              description="Соковита вишня, що розкриється як ніжний обійм, зберігаючи в собі секрети спокусливої солодкості."
            />
          </li>
          <li>
            <CakesBlock
              title="Таємниче тоффі"
              price="400.00"
              urlImage="https://i.ibb.co/C7PN2LR/toffi-cake.jpg"
              weight="1.70 кг"
              description="Чарівний світ таємниць, де солодке тоффі розтає на язиці, розкриваючи непередбачувані смакові перепетії."
            />
          </li>
          <li>
            <CakesBlock
              title="Орео Вихор"
              price="500.00"
              urlImage="https://i.ibb.co/mNCRXdQ/oreo-cake.jpg"
              weight="2.00 кг"
              description="Віртуозний оберт орео у пишному танці бісквітного коржа, де кожен шар - це новий ритм незабутнього смаку."
            />
          </li>
          <li>
            <CakesBlock
              title="Ожинове натхнення"
              price="450.00"
              urlImage="https://i.ibb.co/RBKmj5Y/blackberry-cake.jpg"
              weight="1.70 кг"
              description="Сповідь ожинового плоду, яка збуджує кожен відчуття своєю ароматною таємницею."
            />
          </li>
        </ul>
      </>
    );
}





export default CakesItem;