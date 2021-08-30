import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => (
    {
        container: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(5, 0),
            display: 'grid',
            placeItems: 'center',
            margin: theme.spacing(3, 0),
        },
        Card: {
            padding: theme.spacing(1),
            margin: theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
        CardContent: {
            margin: theme.spacing(1, 0),
            padding: theme.spacing(0),
            float: 'left',
        },
        CardActions: {
            float: 'right',
            marginLeft: 'auto',
            padding: theme.spacing(0),
            paddingLeft: theme.spacing(1),
        },
        IconButtons: {
            padding: theme.spacing(0),
        },
        AppBar : {
            flexDirection: 'row',
            alignItems: 'center',
        },
        title: {
            marginLeft: theme.spacing(3),
            display: 'inline-block',
        },
        accountName: {
            display: 'inline-block',
            marginLeft: 'auto',
            margin: theme.spacing(0, 2)
        },
        heroButtons: {
            marginTop: theme.spacing(4),
        },
        Modal: {
            padding: theme.spacing(1),
        },
        TextField: {
            margin: theme.spacing(1),
        },
        ContentCenter: {
            display: 'grid',
            placeItems: 'center',
            padding: theme.spacing(3, 0),
        },
        List: {
            paddingInlineStart: theme.spacing(0),
        },
        Auth: {
            display: 'grid',
            placeItems: 'center',
            margin: theme.spacing(7, 0)
        },
    }
  )
);

export default useStyles;