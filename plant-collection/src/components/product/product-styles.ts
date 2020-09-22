import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#05386b'
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9

    },
    cardContent: {
        flexGrow: 1,

    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },

    test: {
    }

}));

export default useStyles;