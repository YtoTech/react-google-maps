import invariant from "invariant"
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"

import { MAP } from "../constants"

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
    "onDblClick": "dblclick",
    "onDragEnd": "dragend",
    "onDragStart": "dragstart",
    "onMapTypeIdChanged": "maptypeid_changed",
    "onMouseMove": "mousemove",
    "onMouseOut": "mouseout",
    "onMouseOver": "mouseover",
    "onRightClick": "rightclick",
    "onTilesLoaded": "tilesloaded"
  },
  "getInstanceFromComponent": "this.context[MAP]"
}`
// TODO this.context[MAP] now passed as a props (google).

/**
 * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
 */
export class Map extends React.PureComponent {
  static displayName = "GoogleMap"

  static propTypes = {
    __jscodeshiftPlaceholder__: null,
  }

  static childContextTypes = {
    [MAP]: PropTypes.object,
  }

  getChildContext() {
    return {
      [MAP]: this.props.google,
    }
  }

  /**
   * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  fitBounds(...args) {
    return this.props.google.fitBounds(...args)
  }

  /**
   * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  panBy(...args) {
    return this.props.google.panBy(...args)
  }

  /**
   * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  panTo(...args) {
    return this.props.google.panTo(...args)
  }

  /**
   * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  panToBounds(...args) {
    return this.props.google.panToBounds(...args)
  }

  /*
   * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   */
  constructor(props) {
    super(props)
    invariant(
      !!props.google,
      `Did you wrap <GoogleMap> component with withGoogleMap() HOC?`
    )
    construct(GoogleMap.propTypes, updaterMap, this.props, props.google)
  }

  componentDidMount() {
    componentDidMount(this, this.props.google, eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(this, this.props.google, eventMap, updaterMap, prevProps)
  }

  componentWillUnmount() {
    componentWillUnmount(this)
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}

export const GoogleMap = Map

export default Map

const eventMap = {}

const updaterMap = {}
