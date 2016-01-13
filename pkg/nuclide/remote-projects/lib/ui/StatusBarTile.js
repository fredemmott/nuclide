

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var ConnectionState = require('../ConnectionState');

var _require = require('../notification');

var notifyLocalDiskFile = _require.notifyLocalDiskFile;
var notifyConnectedRemoteFile = _require.notifyConnectedRemoteFile;
var notifyDisconnectedRemoteFile = _require.notifyDisconnectedRemoteFile;

var React = require('react-for-atom');
var PropTypes = React.PropTypes;

var StatusBarTile = React.createClass({
  displayName: 'StatusBarTile',

  propTypes: {
    connectionState: PropTypes.number.isRequired,
    fileUri: React.PropTypes.string
  },

  render: function render() {
    var iconName = null;
    switch (this.props.connectionState) {
      case ConnectionState.NONE:
        break;
      case ConnectionState.LOCAL:
        iconName = 'device-desktop';
        break;
      case ConnectionState.CONNECTED:
        iconName = 'cloud-upload';
        break;
      case ConnectionState.DISCONNECTED:
        iconName = 'alert';
        break;
    }
    // When the active pane isn't a text editor, e.g. diff view, preferences, ..etc.,
    // We don't show a connection status bar.
    if (!iconName) {
      return null;
    }
    return React.createElement('span', {
      className: 'icon icon-' + iconName + ' nuclide-remote-projects-status-icon',
      onClick: this.onStatusBarTileClicked
    });
  },

  onStatusBarTileClicked: function onStatusBarTileClicked() {
    if (!this.props.fileUri) {
      return;
    }
    switch (this.props.connectionState) {
      case ConnectionState.LOCAL:
        notifyLocalDiskFile(this.props.fileUri);
        break;
      case ConnectionState.CONNECTED:
        notifyConnectedRemoteFile(this.props.fileUri);
        break;
      case ConnectionState.DISCONNECTED:
        notifyDisconnectedRemoteFile(this.props.fileUri);
        break;
    }
  }
});

module.exports = StatusBarTile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0YXR1c0JhclRpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVdBLElBQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOztlQUtsRCxPQUFPLENBQUMsaUJBQWlCLENBQUM7O0lBSDVCLG1CQUFtQixZQUFuQixtQkFBbUI7SUFDbkIseUJBQXlCLFlBQXpCLHlCQUF5QjtJQUN6Qiw0QkFBNEIsWUFBNUIsNEJBQTRCOztBQUU5QixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNqQyxTQUFTLEdBQUksS0FBSyxDQUFsQixTQUFTOztBQUVoQixJQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDdEMsV0FBUyxFQUFFO0FBQ1QsbUJBQWUsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDNUMsV0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTTtHQUNoQzs7QUFFRCxRQUFNLEVBQUEsa0JBQWtCO0FBQ3RCLFFBQUksUUFBUSxHQUFHLElBQUksQ0FBQztBQUNwQixZQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZTtBQUNoQyxXQUFLLGVBQWUsQ0FBQyxJQUFJO0FBQ3ZCLGNBQU07QUFBQSxBQUNSLFdBQUssZUFBZSxDQUFDLEtBQUs7QUFDeEIsZ0JBQVEsR0FBRyxnQkFBZ0IsQ0FBQztBQUM1QixjQUFNO0FBQUEsQUFDUixXQUFLLGVBQWUsQ0FBQyxTQUFTO0FBQzVCLGdCQUFRLEdBQUcsY0FBYyxDQUFDO0FBQzFCLGNBQU07QUFBQSxBQUNSLFdBQUssZUFBZSxDQUFDLFlBQVk7QUFDL0IsZ0JBQVEsR0FBRyxPQUFPLENBQUM7QUFDbkIsY0FBTTtBQUFBLEtBQ1Q7OztBQUdELFFBQUksQ0FBQyxRQUFRLEVBQUU7QUFDYixhQUFPLElBQUksQ0FBQztLQUNiO0FBQ0QsV0FDRTtBQUNFLGVBQVMsaUJBQWUsUUFBUSx5Q0FBdUM7QUFDdkUsYUFBTyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQUFBQztNQUNyQyxDQUNGO0dBQ0g7O0FBRUQsd0JBQXNCLEVBQUEsa0NBQVM7QUFDN0IsUUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQ3ZCLGFBQU87S0FDUjtBQUNELFlBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlO0FBQ2hDLFdBQUssZUFBZSxDQUFDLEtBQUs7QUFDeEIsMkJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QyxjQUFNO0FBQUEsQUFDUixXQUFLLGVBQWUsQ0FBQyxTQUFTO0FBQzVCLGlDQUF5QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUMsY0FBTTtBQUFBLEFBQ1IsV0FBSyxlQUFlLENBQUMsWUFBWTtBQUMvQixvQ0FBNEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2pELGNBQU07QUFBQSxLQUNUO0dBQ0Y7Q0FDRixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMiLCJmaWxlIjoiU3RhdHVzQmFyVGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuLyogQGZsb3cgKi9cblxuLypcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW5cbiAqIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmNvbnN0IENvbm5lY3Rpb25TdGF0ZSA9IHJlcXVpcmUoJy4uL0Nvbm5lY3Rpb25TdGF0ZScpO1xuY29uc3Qge1xuICBub3RpZnlMb2NhbERpc2tGaWxlLFxuICBub3RpZnlDb25uZWN0ZWRSZW1vdGVGaWxlLFxuICBub3RpZnlEaXNjb25uZWN0ZWRSZW1vdGVGaWxlLFxufSA9IHJlcXVpcmUoJy4uL25vdGlmaWNhdGlvbicpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdC1mb3ItYXRvbScpO1xuY29uc3Qge1Byb3BUeXBlc30gPSBSZWFjdDtcblxuY29uc3QgU3RhdHVzQmFyVGlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgY29ubmVjdGlvblN0YXRlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZmlsZVVyaTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgfSxcblxuICByZW5kZXIoKTogP1JlYWN0RWxlbWVudCB7XG4gICAgbGV0IGljb25OYW1lID0gbnVsbDtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMuY29ubmVjdGlvblN0YXRlKSB7XG4gICAgICBjYXNlIENvbm5lY3Rpb25TdGF0ZS5OT05FOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ29ubmVjdGlvblN0YXRlLkxPQ0FMOlxuICAgICAgICBpY29uTmFtZSA9ICdkZXZpY2UtZGVza3RvcCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDb25uZWN0aW9uU3RhdGUuQ09OTkVDVEVEOlxuICAgICAgICBpY29uTmFtZSA9ICdjbG91ZC11cGxvYWQnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ29ubmVjdGlvblN0YXRlLkRJU0NPTk5FQ1RFRDpcbiAgICAgICAgaWNvbk5hbWUgPSAnYWxlcnQnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gV2hlbiB0aGUgYWN0aXZlIHBhbmUgaXNuJ3QgYSB0ZXh0IGVkaXRvciwgZS5nLiBkaWZmIHZpZXcsIHByZWZlcmVuY2VzLCAuLmV0Yy4sXG4gICAgLy8gV2UgZG9uJ3Qgc2hvdyBhIGNvbm5lY3Rpb24gc3RhdHVzIGJhci5cbiAgICBpZiAoIWljb25OYW1lKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT17YGljb24gaWNvbi0ke2ljb25OYW1lfSBudWNsaWRlLXJlbW90ZS1wcm9qZWN0cy1zdGF0dXMtaWNvbmB9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdGF0dXNCYXJUaWxlQ2xpY2tlZH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSxcblxuICBvblN0YXR1c0JhclRpbGVDbGlja2VkKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wcm9wcy5maWxlVXJpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5jb25uZWN0aW9uU3RhdGUpIHtcbiAgICAgIGNhc2UgQ29ubmVjdGlvblN0YXRlLkxPQ0FMOlxuICAgICAgICBub3RpZnlMb2NhbERpc2tGaWxlKHRoaXMucHJvcHMuZmlsZVVyaSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDb25uZWN0aW9uU3RhdGUuQ09OTkVDVEVEOlxuICAgICAgICBub3RpZnlDb25uZWN0ZWRSZW1vdGVGaWxlKHRoaXMucHJvcHMuZmlsZVVyaSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDb25uZWN0aW9uU3RhdGUuRElTQ09OTkVDVEVEOlxuICAgICAgICBub3RpZnlEaXNjb25uZWN0ZWRSZW1vdGVGaWxlKHRoaXMucHJvcHMuZmlsZVVyaSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXR1c0JhclRpbGU7XG4iXX0=