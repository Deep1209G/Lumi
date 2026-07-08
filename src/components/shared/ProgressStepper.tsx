import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Box, Text } from '@src';

type ProgressStepperProps = {
  steps: string[];
  currentStep: number;
};

const ProgressStepper = ({
  steps,
  currentStep,
}: ProgressStepperProps) => {
  return (
    <Box
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      {steps.map((step, index) => {
        const completed = index < currentStep;
        const active = index === currentStep;

        return (
          <React.Fragment key={step}>
            {/* Step */}
            <Box alignItems="center">
              <Box
                width={25}
                height={25}
                borderRadius="xl"
                justifyContent="center"
                alignItems="center"
                borderWidth={1.5}
                borderColor={
                  completed || active ? 'textPrimary' : 'border'
                }
                backgroundColor={
                  completed || active ? 'textPrimary' : 'white'
                }
              >
                {completed ? (
                  <Ionicons
                    name="checkmark"
                    size={20}
                    color="white"
                  />
                ) : (
                  <Text variant='medium'
                    color={
                      active ? 'white' : 'textSecondary'
                    }
                  >
                    {index + 1}
                  </Text>
                )}
              </Box>

              <Text
                marginTop="xs"
                variant="small"
                textAlign="center"
              >
                {step}
              </Text>
            </Box>

            {/* Line */}
            {index !== steps.length - 1 && (
              <Box
                flex={1}
                height={2}
                marginTop="m"
                marginHorizontal="s"
                backgroundColor={
                  completed ? 'textPrimary' : 'border'
                }
              />
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default ProgressStepper;