import React, { Fragment } from 'react';
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// @material-ui/icons

// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import styles from 'assets/jss/nextjs-material-kit/layouts/mainLayout.js';

// Sections for this page
import ProductSection from 'pages-sections/LandingPage-Sections/ProductSection.js';

const useStyles = makeStyles(styles);

const useStyle = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		paddingTop: '110px',
		paddingLeft: '2%',
		paddingRight: '2%'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.primary,
		backgroundColor: 'rgba(218, 171, 1, .17)'
	}
}));

export default function TestPage() {
	const classes = useStyles();
	const classet = useStyle();

	return (
		<div>
			<Header rightLinks={<HeaderLinks />} fixed color='transparent' />
			<div className={classes.mainBg}>
				<div className={classet.root}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Paper className={classet.paper}>
								<ProductSection />
							</Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classet.paper}>xs=12 sm=6</Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classet.paper}>xs=12 sm=6</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classet.paper}>xs=6 sm=3</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classet.paper}>xs=6 sm=3</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classet.paper}>xs=6 sm=3</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classet.paper}>xs=6 sm=3</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
}
