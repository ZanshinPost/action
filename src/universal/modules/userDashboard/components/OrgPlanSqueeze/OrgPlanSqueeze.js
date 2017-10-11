import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite-local-styles/no-important';
import withStyles from 'universal/styles/withStyles';
import ui from 'universal/styles/ui';
import appTheme from 'universal/styles/theme/appTheme';
import Button from 'universal/components/Button/Button';
import Panel from 'universal/components/Panel/Panel';
import OrgPlanBadge from 'universal/modules/userDashboard/components/OrgPlanBadge/OrgPlanBadge';

const OrgPlanSqueeze = (props) => {
  const {styles} = props;

  const noActiveUsers = 7;
  const subscriptionPrice = 5;
  const estimatedCost = noActiveUsers * subscriptionPrice;
  const showCost = true;

  return (
    <Panel hasHeader={false}>
      <div className={css(styles.panelInner)}>
        <div className={css(styles.panelCell, styles.panelPersonal)}>
          <OrgPlanBadge planType="personal" />
          <p className={css(styles.copy)}>
            {'Your current plan.'}<br />
            {'The basics, for free!'}
          </p>
        </div>
        <div className={css(styles.panelCell)}>
          <OrgPlanBadge planType="pro" />
          <p className={css(styles.copy, styles.copyPro)}>
            {'This could be you.'}<br />
            {'Ready for the full experience?'}
          </p>
          <div className={css(styles.buttonBlock)}>
            <Button
              colorPalette="cool"
              depth={2}
              isBlock
              label="Upgrade to the Pro Plan"
              onClick={() => (console.log(`
                Open the CC modal;
                if they bail, show Billing View !isPaid;
                otherwise, when CC success, show Billing View isPaid.
              `))}
              size="small"
            />
          </div>
          {showCost ?
            <div className={css(styles.costHint)}>
              {`${noActiveUsers} Active Users x $${subscriptionPrice} = $${estimatedCost}/mo`}
            </div> :
            <Button
              colorPalette="cool"
              buttonStyle="flat"
              icon="question-circle"
              iconPlacement="right"
              label="How much will it cost?"
              size="smallest"
            />
          }
        </div>
      </div>
      <div className={css(styles.panelCell, styles.panelFooter)}>
        <Button
          colorPalette="mid"
          buttonStyle="flat"
          icon="external-link-square"
          iconPlacement="right"
          label="Learn About Plans & Invoicing"
          size="smallest"
        />
      </div>
    </Panel>
  );
};


OrgPlanSqueeze.propTypes = {
  styles: PropTypes.object
};

const panelBorder = `.0625rem solid ${ui.panelInnerBorderColor}`;
const padding = ui.panelGutter;

const styleThunk = () => ({
  panelInner: {
    display: 'flex',
    width: '100%'
  },

  panelCell: {
    flex: 1,
    padding,
    textAlign: 'center'
  },

  panelPersonal: {
    borderRight: panelBorder
  },

  panelFooter: {
    borderTop: panelBorder
  },

  copy: {
    color: ui.palette.dark,
    fontSize: appTheme.typography.s2,
    fontWeight: 700,
    lineHeight: appTheme.typography.s5,
    margin: '1rem 0 .5rem'
  },

  copyPro: {
    color: appTheme.palette.light40d
  },

  buttonBlock: {
    padding: '1rem'
  },

  costHint: {
    backgroundColor: appTheme.palette.cool10l,
    borderRadius: ui.borderRadiusSmall,
    color: appTheme.palette.cool,
    fontSize: appTheme.typography.s2,
    fontWeight: 700,
    lineHeight: '2rem',
    margin: '0 1rem',
    textAlign: 'center'
  }
});

export default withStyles(styleThunk)(OrgPlanSqueeze);