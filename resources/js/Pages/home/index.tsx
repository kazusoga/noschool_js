import React, { FC } from 'react'

type Props = {
    testdata: string
}

const HomePage:FC<Props> = (props) => {
    const {testdata} = props
    let foo: string = "React";
    const bar: string = "TypeScript";

    return (
        <h1>
            Hello {foo} + {bar} + {testdata}
        </h1>
    );
}

// class HomePage extends React.Component<{}> {
//     constructor(props: any) {
//         super(props);
//     }

//     render() {
//         let foo: string = "React";
//         const bar: string = "TypeScript";

//         return (
//             <h1>
//                 Hello {foo} + {bar} {this.props.testdata}
//             </h1>
//         );
//     }
// }



export default HomePage;