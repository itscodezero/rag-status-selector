import React from 'react'
import styles from './styles.module.css'
class SelectDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.onOpen = this.onOpen.bind(this)
        this.onSelect = this.onSelect.bind(this)

        this.wrapperRef = React.createRef()
        this.handleClickOutside = this.handleClickOutside.bind(this)

        this.state = {
            selected: null,
            opened: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.selectedOption !== this.props.selectedOption) {
            this.setState({
                selected: this.props.defaultOption
            })
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState({
                opened: false
            })
        }
    }

    onOpen() {
        this.setState({
            opened: !this.state.opened
        })
    }

    onSelect(option) {
        this.setState(
            {
                selected: option,
                opened: false
            },
            () => {
                this.props.onSelect(option)
            }
        )
    }

    getOptions() {
        return this.props.options.map((o) => (
            <Option key={o.key} option={o} onSelect={this.onSelect} />
        ))
    }

    render() {
        let items = this.getOptions()
        let selected = this.state.selected ? this.state.selected.value : 'Select'
        let cssClass = this.state.opened ? styles.show : styles.hide;
        let style = { background: selected }
        return (
            <div className={styles.select} ref={this.wrapperRef} onClick={this.onOpen}>
                <span className={styles.selectedRAG} style={style} />
                <span className={styles.dropdownArrow} />
                <ul className={cssClass}>{items}</ul>
            </div>
        )
    }
}

class Option extends React.Component {
    constructor(props) {
        super(props)
        this.onSelect = this.onSelect.bind(this)
    }

    onSelect(e) {
        e.preventDefault()
        this.props.onSelect(this.props.option)
    }

    render() {
        let style = { background: this.props.option.value }
        return (
            <li onClick={this.onSelect}>
                <a href='#' style={style} />
            </li>
        )
    }
}

export default SelectDropdown
