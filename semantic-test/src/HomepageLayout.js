import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Imagine-a-Company'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='data:image/jpeg;base64,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' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtoEocVdTNymUpWungDQEpvMF5_ZRoJ3cBXbIBBznWkW1wiUK' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='https://redux.js.org/introduction/learning-resources'>Case Studies</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout
