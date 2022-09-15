import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { idMock, carMockRead, carMockCreate } from '../../mocks/car';
import { ErrorTypes } from '../../../erros/catalog';
import CarModel from '../../../models/Cars';

describe('Testes de Car para camada model', () => {
  const carModel = new CarModel();

  describe('Verifica a função read', () => {
    it('Função read executada com sucesso', async () => {
      sinon.stub(Model, 'create').resolves(carMockRead);
      const response = await carModel.create(carMockCreate);
      expect(response).to.be.equal(carMockRead);
      sinon.restore();
    });
  })
})