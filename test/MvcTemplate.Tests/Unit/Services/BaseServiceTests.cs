﻿using MvcTemplate.Data.Core;
using NSubstitute;
using System;
using Xunit;

namespace MvcTemplate.Services.Tests
{
    public class BaseServiceTests : IDisposable
    {
        private IUnitOfWork unitOfWork;
        private BaseService service;

        public BaseServiceTests()
        {
            unitOfWork = Substitute.For<IUnitOfWork>();
            service = Substitute.ForPartsOf<BaseService>(unitOfWork);
        }
        public void Dispose()
        {
            unitOfWork.Dispose();
            service.Dispose();
        }

        #region Dispose()

        [Fact]
        public void Dispose_UnitOfWork()
        {
            service.Dispose();

            unitOfWork.Received().Dispose();
        }

        [Fact]
        public void Dispose_MultipleTimes()
        {
            service.Dispose();
            service.Dispose();
        }

        #endregion
    }
}
