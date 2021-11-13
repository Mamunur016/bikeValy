import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";


const SideNavbar = () => {
    return (
        <div>



            <Row>


                <Col className=' '>
                    <Router>
                        <div>
                            <Row>
                                <Col md={4}>
                                    <Link to='/home'>Home</Link>
                                    <Link to='/topics'>topics</Link>
                                </Col>
                                <Col md={12}>
                                    <Switch>
                                        <Route exact path="/home">
                                            <Home />
                                        </Route>
                                        <Route path="/topics">
                                            <Topics />
                                        </Route>
                                    </Switch>
                                </Col>
                            </Row>

                        </div>
                    </Router>
                </Col>

                <Col>

                </Col>


            </Row>
        </div>
    );
};
function Home() {
    return (
        <div>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quod architecto facere, incidunt alias voluptates itaque atque sed, dignissimos quos officiis autem nihil ipsam. Nihil neque ut officia dolor veniam eligendi animi sint quidem recusandae minima quo provident quas aliquam, adipisci voluptate mollitia alias ullam nostrum, hic aspernatur necessitatibus optio! Error vel assumenda enim iste, numquam illo corrupti? Vero nisi distinctio eius aperiam nam tenetur culpa officiis nemo nesciunt quae, quod consequatur necessitatibus corrupti doloribus ut magni reprehenderit ad assumenda? Dicta itaque repellendus voluptatem autem expedita. Consectetur, doloremque a. Impedit recusandae veniam dolorum eos a quae consectetur quo iste unde ab. Commodi vero animi quos, ipsum quisquam eaque doloremque provident explicabo, voluptatibus ab, consequuntur recusandae officia perferendis iste numquam laboriosam fuga! Eveniet consectetur maxime necessitatibus aperiam iure earum natus quaerat porro! Iure dolorem iusto adipisci animi blanditiis eos nesciunt dolore cumque a quae molestiae, nobis in. Sapiente placeat laudantium, repellat adipisci error eaque labore? Quod placeat excepturi est. Esse, alias. Voluptatem, ratione recusandae enim quidem aperiam culpa? Fugiat, ab eaque deleniti quas exercitationem ut ad eum rem voluptas ducimus reprehenderit delectus veniam consequuntur ratione libero provident nobis voluptates recusandae praesentium dolorem. Itaque amet, rem exercitationem officia beatae praesentium laborum sed neque. Tempore recusandae harum veniam placeat pariatur quos non voluptas. Nam esse praesentium quia nobis, a ex veniam, officiis similique dolorum quo corrupti nihil quis autem inventore quibusdam consequatur porro voluptatum repellat illum dicta, exercitationem officia doloremque provident necessitatibus? Omnis dolor aliquid officia commodi, unde delectus dolores! Rerum reprehenderit neque tempora debitis cupiditate qui impedit accusantium, nemo tenetur cumque pariatur id omnis, aspernatur quos totam, sequi quasi perferendis? Amet eaque eum obcaecati maxime consequatur, nesciunt iste nobis necessitatibus eos repellendus quo, quisquam qui autem officiis ea saepe dolores veritatis consectetur cumque aliquid omnis id illum dignissimos quibusdam. Nam possimus earum nulla ad exercitationem dolore modi cumque aperiam, incidunt eligendi accusantium eum consequuntur enim distinctio voluptate ipsam tenetur veniam quis, optio consectetur cupiditate illum. Ipsa accusantium tempore omnis est aliquid, odit nulla asperiores temporibus beatae voluptatibus voluptate ullam laboriosam libero quibusdam aspernatur saepe tenetur molestias porro! Dolor debitis optio explicabo hic mollitia praesentium deserunt aut, neque earum quam sed est! Autem libero, illo error sit fuga debitis necessitatibus saepe laudantium, ex quia, incidunt magnam aliquid dolor vero deleniti. Harum esse magni architecto quis soluta pariatur officiis dolores sunt natus saepe suscipit tenetur unde earum excepturi, distinctio nesciunt nostrum sit rem dicta veniam sint dolorem iusto repellat neque? Minus iure ipsam architecto delectus! Quia odio assumenda iusto nisi consequuntur libero error laboriosam rerum quisquam reprehenderit aspernatur dolor, numquam facere quod tempora atque mollitia fugiat aliquid minima voluptatum saepe voluptate? Dignissimos nam ad laboriosam, non at dolorem accusantium reprehenderit nesciunt illum minus ipsam a commodi ullam tempora expedita eligendi laudantium delectus asperiores dolore tenetur! Repellendus, libero doloremque voluptatibus facere iusto minus sint veritatis incidunt amet cumque deleniti ea tempora nihil! Pariatur eaque recusandae ullam culpa! Debitis quos magnam eos obcaecati nihil? Aut, ullam quis hic tenetur labore nulla ducimus ea. Sequi est iste provident illum vel laboriosam inventore, ipsum neque nam sint aliquid, possimus sit dolorum ullam nemo perspiciatis animi tenetur a nobis tempore. Nobis voluptate quia officiis adipisci veniam itaque expedita corporis magnam, nihil perspiciatis quam suscipit perferendis quibusdam voluptatem maxime doloribus amet dolores labore ipsum. Rerum eveniet assumenda ab blanditiis quam qui, animi voluptatum earum sunt incidunt at quo cupiditate commodi deserunt. In, iste quae dicta veniam autem illo vel unde sapiente pariatur necessitatibus libero perspiciatis repellat possimus error culpa harum tempora minima delectus sunt vero corrupti, ratione voluptas. Dolores provident porro nulla ducimus impedit illo explicabo aut itaque soluta ex aperiam saepe magnam inventore esse vel nam facilis eius quidem, error eveniet. Nostrum nobis fuga tenetur, qui, tempore ducimus sequi eveniet necessitatibus magnam cumque eum aperiam quis dolorum. Omnis aspernatur doloribus assumenda, laudantium ipsam, veritatis corrupti provident, ut cum natus laborum beatae modi! Eligendi fuga modi quidem aliquid, vitae ipsam nisi, culpa asperiores repudiandae sequi quasi optio tempora harum dolore, commodi corrupti voluptatum officiis omnis consequuntur. Id beatae nobis suscipit hic mollitia repudiandae totam distinctio facilis voluptatum consequuntur architecto atque exercitationem, pariatur quaerat esse, harum asperiores consequatur ratione maiores quas assumenda? Fugiat maxime beatae vitae aut ipsum possimus asperiores, sapiente optio nulla repellat necessitatibus praesentium? Voluptas, cumque natus maiores sapiente deserunt beatae expedita blanditiis sit quisquam magnam consequatur non accusantium aut doloremque! Soluta minus nobis quasi quos, explicabo necessitatibus assumenda quo pariatur. Enim nostrum provident rem quisquam qui? Qui nesciunt illo perspiciatis, labore id pariatur! Provident et delectus quam ad labore ducimus, laudantium alias blanditiis quibusdam praesentium iusto sapiente harum fugiat? Blanditiis sequi voluptatum cum odit quae eveniet? Incidunt ducimus excepturi quos dolor ipsa! Vel, cupiditate dolorem qui sit distinctio et nihil recusandae nesciunt nemo. Harum facilis, temporibus hic doloribus illo repudiandae id magni aspernatur, suscipit molestiae blanditiis eveniet veniam consectetur alias iure velit laboriosam in. Placeat quisquam, ea vero nulla recusandae est distinctio laudantium deserunt quo quibusdam dolor a explicabo id laborum repellat officiis modi asperiores? Ad aliquam deserunt alias obcaecati minus illum molestias voluptatem facere id, impedit quisquam recusandae provident a fugit. Praesentium est laudantium quo, quis provident reiciendis corporis in, suscipit totam esse consequuntur, expedita aliquam architecto porro. Omnis error consequuntur fugiat cum suscipit quos dolores nostrum blanditiis dolorem nesciunt esse perferendis tempora quo assumenda, voluptas placeat! Vero officia officiis repudiandae assumenda accusamus minus repellat veritatis maxime sint illum quibusdam culpa esse illo, quos aliquid voluptas aspernatur fuga architecto! Odit deserunt quaerat omnis error molestiae quas pariatur cum nulla praesentium illo, ipsam quibusdam explicabo, modi a beatae placeat quia, neque unde! Sunt maiores esse voluptate distinctio suscipit rerum natus quibusdam doloremque, debitis minima, odio sint quod possimus omnis voluptates reprehenderit ullam quos magnam accusamus dolor. Ipsam nostrum quidem blanditiis labore ex sit ullam doloribus nihil consequatur quas cupiditate dolores quisquam repudiandae eos nisi accusamus reiciendis autem itaque iste hic facere quasi sed, quos laudantium! Ab excepturi aperiam voluptatum alias molestias laboriosam ducimus iure, optio amet corrupti veniam suscipit perferendis corporis reiciendis quam officiis recusandae laborum nihil libero.</h2>
        </div>
    );
}
function Topics() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}
function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}

export default SideNavbar;