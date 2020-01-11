import React,{Component} from 'react';
import MonacoEditor from 'react-monaco-editor'

const code =
`#include <stdio.h>

int main()
{
    int a, b, c;
    printf("Enter the first value:");
    scanf("%d", &a);
    printf("Enter the second value:");
    scanf("%d", &b);
    c = a + b;
    printf("%d + %d = %d", a, b, c);
    return 0;
}

`
export default class SimpleTypescriptEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: props.width,
            code: code
        }
    }

    

    onChange(newValue, e) {
        console.log('onChange', newValue, e);
    }

    render() {
        return (
            <MonacoEditor
                width={this.props.width}
                // height="800"
                language="c"
                theme="vs-dark"
                defaultValue=''
                value={this.state.code}
                onChange={this.onChange}
            />
        )
    }
}