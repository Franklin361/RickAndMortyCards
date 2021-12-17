
import { Card } from "../../components/CardItem/Card";




import { HeaderNav } from "../../components/HeaderNav";
import { InputSearch } from "../../components/InputSearch";
import { LayoutCards } from '../../components/LayoutCards';
import { ButtonSearch } from '../../components/Button/ButtonSearch';

import "./styles.css";

export const HomePage = () => {



    return (
        <div className="container_home">

            <HeaderNav />

            <InputSearch />

            <LayoutCards/>

            <ButtonSearch/>
        </div>
    )
}

export default HomePage