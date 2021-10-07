import Card from "../Layouts/Card";
import Input from "../UI/Input";
import classes from "./Form.module.css";

const Form = (props) => {
  return (
    <div className={classes.main_form}>
      <Card>
        <form>
          <Input label="Redusert Årsverk" />
          <Input label="Månedslønn" />
          <Input label="FerieTrekk" />
          <Input label="SkiftTillegg Natt" />
          <hr />
          <Input label="Produksjonstillegg lokalt" />
          <Input label="Forkortet arb.tid 5,63%" />
          <Input label="Reisetillegg OPR" />
          <Input label="Offshore tillegg" />
          <Input label="Øvelse OFF"/>
          <Input label="Tillegg 100 OFF" />
          <hr />
          <Input label="Kostbesparelse i hjemmet" />
          <Input label="Gruppeliv OFF" />
          <Input label="Reduksjon fors.premie" />
          <Input label="Fri Kost trekkpliktig" />
          <hr />
          <br />
           <hr />
          <Input label="Brutto" />
          <hr />
          <br />
          <Input label="Fagforeningstrekk" />
          <Input label="Egenandel forsikring" />
          <Input label="Klubbtrekk" />
          <Input label="SkatteTrekk" />
          <br />
          <hr />
          <br />
          <Input label="Feriepengegrunnlag" />
          <Input label="Forskuddstrekk" />
          <br />
          <hr />
          <br />
          <Input label="Netto Utbetalt" />
          
        </form>
      </Card>
    </div>
  );
};

export default Form;
