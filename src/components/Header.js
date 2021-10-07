import classes from './Header.module.css';

const Header = () => {

    return <div className={classes.container}>
        <h2 className={classes.item}>Lønnskalkulator</h2>
        <h2 className={classes.item}>Årsavregning</h2>
    </div>

};

export default Header;