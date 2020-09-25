import React from 'react';
import styles from './Loading.module.css';




class Loading extends React.Component {
    checkImage = path =>
        new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = () => resolve(path)
            img.onerror = () => reject()

            img.src = path
        })

    state = { imagesLoaded: false }

    componentDidMount() {
        console.log(this.props)
        Promise.all(
            this.props.imgs.map(this.checkImage)
        ).then(
            () => {
                //this.setState(() => ({ imagesLoaded: true }));
                this.props.isReady(true);
            },
            () => console.error('could not load images')

        )

    }




    render() {
        return (
            <div className="Loading">
                {
                    this.state.imagesLoaded
                        ? <p>Images are ready</p>
                        : <div ><p>Loading ... </p> <div className={styles.spinner} ></div></div>
                }
            </div>
        );
    }

}

export default Loading;
