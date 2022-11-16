import React from 'react'
import Login from '../pages/login'
import Bancario from './bancario.routes'
import SignUp from '../pages/signUp'
import Home from '../pages/home'
import Estoque from './estoque.routes'
import SplashScreen from '../pages/splashScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AuthStack = createNativeStackNavigator()

const AuthRoutesHome = () => (

    <AuthStack.Navigator>

        <AuthStack.Screen

            name="SplashScreen"

            component={SplashScreen}

            options={{ headerShown: false }}

        />

        <AuthStack.Screen

            name="Login"

            component={Login}

            options={{ headerShown: false }}

        />

        <AuthStack.Screen

            name="SignUp"

            component={SignUp}

            options={{ headerShown: false }}

        />

        <AuthStack.Screen

            name="Home"

            component={Home}

            options={{ headerShown: false }}

        />

        <AuthStack.Screen

            name="Bancario"

            component={Bancario}

            options={{ headerShown: false }}

        />

        <AuthStack.Screen

            name="Estoque"

            component={Estoque}

            options={{ headerShown: false }}

        />

    </AuthStack.Navigator>

)

export default AuthRoutesHome
