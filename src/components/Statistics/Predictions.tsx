import React from 'react';
import { toast } from 'react-toastify';
import { LoadingOverlay } from '@/components/Loader';
import Table from '@/components/Table';
import { useGetMyPredictionsQuery } from '@/services/queries/student/predictions.query';

const Predictions = () => {
  const {
    isLoading: predictionsLoading,
    isError: predictionsError,
    error: predictionsErrorMessage,
    data: predictions,
  } = useGetMyPredictionsQuery();

  if (predictionsError) {
    toast.error(predictionsErrorMessage as string, { theme: 'colored' });
  }

  return (
    <div>
      {predictionsLoading ? (
        <LoadingOverlay />
      ) : (
        <Table
          title="Predictions"
          data={predictions ?? []}
          headers={[
            'subject',
            'predictedGrade',
            'predictedKnowledgeLevel',
            'predictionDate',
          ]}
          buttonText="Make predictions"
          buttonDisplay={true}
        />
      )}
    </div>
  );
};

export default Predictions;
