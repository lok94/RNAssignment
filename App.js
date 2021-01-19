import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Navigation from './src/navigation/navigation';


class App extends React.PureComponent {

    render() {

        return (
            <>
                <StatusBar
                    backgroundColor="#fff"
                    barStyle='dark-content'

                />
                <SafeAreaView
                    style={{
                        backgroundColor: '#fff',
                        flex: 1
                    }}>
                    <Navigation />

                </SafeAreaView>
            </>
        );
    }
}


export default App;