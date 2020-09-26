import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#05386b'
    },

    cardContent: {
        flexGrow: 1,
    },
    productBody: {
        marginTop: 20,
        backgroundColor: '#05386b',
        color: '#EDF5E1',
        padding: 10

    }

}));

export default useStyles;