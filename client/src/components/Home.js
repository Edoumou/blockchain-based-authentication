import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import img from '../img/background7.jpeg';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div className='home-page'>
                <Grid stackable columns={3} textAlign='left'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            This is a demonstration of a Blockchain based authentication
                            where login information are not stored in a database, but the
                            hash resulting from login data is stored on a smart contract.
                            To authenticate users need an athereum address, a username, a
                            password and a four digit code. The user must be connected to
                            the Blockchain before authentication since the web3 sign method
                            is used to generate a cryptographic signature necessary for
                            the generation of the user's login data hash.
                        </Grid.Column>
                        <Grid.Column width={1}>

                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Image src={img} alt='image' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Home;
