import React, {Component} from 'react' ;
import { 
    Layout ,
    Menu
} from 'antd' ;
import HomeWrapper from './home.style' ;
import list from './menu.list' ;
import {
    connect
} from 'react-redux' ;

import HourlyContainer from '../HourlyContainer/index' ;

const { Header , Content , Footer, Sider} = Layout ;

class HomeLayout extends Component {
    render () {
        return (
            <HomeWrapper>
                <Layout>
                    <Sider className = "side-bar">
                        <p className="logo"> Weather Forecast </p>
                        <Menu
                            theme="dark"
                            defaultSelectedKeys={['1']} 
                        >
                            {
                                list.map(temp => (
                                    <Menu.Item key={temp.id}>
                                        {temp.name}
                                    </Menu.Item>
                                ))
                            }   
                        </Menu>
                    </Sider>

                    <Content>
                        <Layout>
                            <Header>
                                <h1 className="heading-text"> What's the weather today ?</h1>
                            </Header>
                            <Content>
                                <HourlyContainer/>
                            </Content>
                           
                            <Footer className="footer">
                                <p> Made by anonyhostvn </p>
                            </Footer>
                        </Layout>
                    </Content>
                </Layout>
            </HomeWrapper>

        ) ;
    }
}

export default connect(
    state => (state)
)(HomeLayout) ;