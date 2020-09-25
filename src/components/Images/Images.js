import React from 'react';



class Images extends React.Component {
    render() {
        return (
            <div className="Images">
                {
                    this.props.imgs.map(imgDIR =>
                        <img src={imgDIR} />
                    )
                }
            </div>
        );
    }

}

export default Images;
